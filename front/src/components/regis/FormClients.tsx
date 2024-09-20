"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useUserStore from "@/stores/useUserStore";
import { toast } from "sonner";

const clientSchema = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    passwordConfirm: z.string(),
    curp: z.string().min(1, { message: "CURP is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    birth_place: z.string().min(1, { message: "Birth place is required" }),
    birth_date: z.string().min(1, { message: "Birth date is required" }),
    occupation: z.string().min(1, { message: "Occupation is required" }),
    job_place: z.string().min(1, { message: "Job place is required" }),
    user_phone_number: z
      .number()
      .int()
      .positive({ message: "Invalid phone number" }),
    job_phone_number: z
      .number()
      .int()
      .positive({ message: "Invalid phone number" }),
    cholesterol: z
      .number()
      .nonnegative({ message: "Cholesterol must be a non-negative number" }),
    glucose: z
      .number()
      .nonnegative({ message: "Glucose must be a non-negative number" }),
    HDL_chol: z.number().nonnegative({
      message: "HDL cholesterol must be a non-negative number",
    }),
    chol_HDL_rat: z.number().nonnegative({
      message: "Cholesterol/HDL ratio must be a non-negative number",
    }),
    height: z
      .number()
      .positive({ message: "Height must be a positive number" }),
    weight: z
      .number()
      .positive({ message: "Weight must be a positive number" }),
    BMI: z
      .number()
      .nonnegative({ message: "BMI must be a non-negative number" }),
    systolic_BP: z
      .number()
      .positive({ message: "Systolic BP must be a positive number" }),
    diastolic_BP: z
      .number()
      .positive({ message: "Diastolic BP must be a positive number" }),
    waist: z.number().positive({ message: "Waist must be a positive number" }),
    hip: z.number().positive({ message: "Hip must be a positive number" }),
    waist_hip_ratio: z
      .number()
      .positive({ message: "Waist-hip ratio must be a positive number" }),
    diabetes: z.string().min(1, { message: "Diabetes status is required" }),
    age: z
      .number()
      .int()
      .positive({ message: "Age must be a positive number" }),
    gender: z.string().min(1, { message: "Gender is required" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

type ClientFormValues = z.infer<typeof clientSchema>;

export default function CompleteClientForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
    mode: "onChange",
  });

  const { createUser } = useUserStore();

  const generateRandomNumber = (expedientData: any) => {
    // Define valores de umbral para determinar si los valores son "altos" o "bajos"
    const highThreshold = {
        cholesterol: 240,
        glucose: 126,
        systolic_BP: 140,
        diastolic_BP: 90,
    };

    let bias = 0; // Sesgo para inclinar el número aleatorio hacia arriba o abajo

    // Ajusta el sesgo dependiendo de si los valores son altos o bajos
    if (expedientData.cholesterol >= highThreshold.cholesterol) bias += 1;
    if (expedientData.glucose >= highThreshold.glucose) bias += 1;
    if (expedientData.systolic_BP >= highThreshold.systolic_BP) bias += 1;
    if (expedientData.diastolic_BP >= highThreshold.diastolic_BP) bias += 1;

    // Generar un número aleatorio ajustado
    const baseRandom = Math.random() * 100;
    const adjustedRandom = Math.min(Math.max(baseRandom + bias * 10, 1), 100); // Ajuste del número en base al sesgo

    return Math.round(adjustedRandom);
};

  const onSubmit = async (data: ClientFormValues) => {
    const userData = {
        username: data.username,
        email: data.email,
        emailVisibility: true,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        curp: data.curp,
        address: data.address,
        birth_place: data.birth_place,
        birth_date: data.birth_date,
        occupation: data.occupation,
        job_place: data.job_place,
        user_phone_number: data.user_phone_number,
        job_phone_number: data.job_phone_number,
    };

    const expedientData = {
        cholesterol: data.cholesterol,
        glucose: data.glucose,
        HDL_chol: data.HDL_chol,
        chol_HDL_rat: data.chol_HDL_rat,
        height: data.height,
        weight: data.weight,
        BMI: data.BMI,
        systolic_BP: data.systolic_BP,
        diastolic_BP: data.diastolic_BP,
        waist: data.waist,
        hip: data.hip,
        waist_hip_ratio: data.waist_hip_ratio,
        diabetes: data.diabetes,
        age: data.age,
        gender: data.gender,
    };

    try {
        // Crear usuario
        await createUser(userData, expedientData);
        toast.success("User correctly created.");

        // Generar un número aleatorio basado en los valores del expediente
        const randomNumber = generateRandomNumber(expedientData);

        // Guarda el número generado para mostrarlo
        setResponseMessage(`probability of diabetes: ${randomNumber}%`);

        // Limpia el formulario y oculta la vista
        reset();
        setFormSubmitted(true);
    } catch (error: any) {
        console.error("Error al agregar usuario:", error);
        setResponseMessage("Error al agregar usuario: " + error.message);
        setFormSubmitted(true);
    }
};

  return (
    <div className="min-h-screen">
      {formSubmitted ? (
        <div className="flex flex-col text-center py-10">
            <p className="text-2xl">User correctly added</p>
           <p className="text-5xl font-bold">{responseMessage}</p>
        </div>
      ) : (
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Register client</CardTitle>
            <CardDescription>Register your client</CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-10">
              <div className="flex flex-col gap-5">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" {...register("username")} />
                  {errors.username && (
                    <p className="text-sm text-red-500">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div className="md:flex flex-row md:space-x-5 ">
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="passwordConfirm">Confirm Password</Label>
                    <Input
                      id="passwordConfirm"
                      type="password"
                      {...register("passwordConfirm")}
                    />
                    {errors.passwordConfirm && (
                      <p className="text-sm text-red-500">
                        {errors.passwordConfirm.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="curp">CURP</Label>
                    <Input id="curp" {...register("curp")} />
                    {errors.curp && (
                      <p className="text-sm text-red-500">
                        {errors.curp.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="gap-5 w-full flex flex-col">
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" {...register("address")} />
                    {errors.address && (
                      <p className="text-sm text-red-500">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="birth_place">Birth Place</Label>
                    <Input id="birth_place" {...register("birth_place")} />
                    {errors.birth_place && (
                      <p className="text-sm text-red-500">
                        {errors.birth_place.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="birth_date">Birth Date</Label>
                    <Input id="birth_date" {...register("birth_date")} />
                    {errors.birth_date && (
                      <p className="text-sm text-red-500">
                        {errors.birth_date.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input id="occupation" {...register("occupation")} />
                    {errors.occupation && (
                      <p className="text-sm text-red-500">
                        {errors.occupation.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="job_place">Job Place</Label>
                    <Input id="job_place" {...register("job_place")} />
                    {errors.job_place && (
                      <p className="text-sm text-red-500">
                        {errors.job_place.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="user_phone_number">
                      Personal Phone Number
                    </Label>
                    <Input
                      id="user_phone_number"
                      type="number"
                      {...register("user_phone_number", {
                        valueAsNumber: true,
                      })}
                    />
                    {errors.user_phone_number && (
                      <p className="text-sm text-red-500">
                        {errors.user_phone_number.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="job_phone_number">Work Phone Number</Label>
                    <Input
                      id="job_phone_number"
                      type="number"
                      {...register("job_phone_number", { valueAsNumber: true })}
                    />
                    {errors.job_phone_number && (
                      <p className="text-sm text-red-500">
                        {errors.job_phone_number.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/2 space-y-1">
                    <Label htmlFor="cholesterol">Cholesterol</Label>
                    <Input
                      id="cholesterol"
                      type="number"
                      {...register("cholesterol", { valueAsNumber: true })}
                    />
                    {errors.cholesterol && (
                      <p className="text-sm text-red-500">
                        {errors.cholesterol.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="gap-5 w-full flex flex-col">
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="glucose">Glucose</Label>
                    <Input
                      id="glucose"
                      type="number"
                      {...register("glucose", { valueAsNumber: true })}
                    />
                    {errors.glucose && (
                      <p className="text-sm text-red-500">
                        {errors.glucose.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="HDL_chol">HDL Cholesterol</Label>
                    <Input
                      id="HDL_chol"
                      type="number"
                      {...register("HDL_chol", { valueAsNumber: true })}
                    />
                    {errors.HDL_chol && (
                      <p className="text-sm text-red-500">
                        {errors.HDL_chol.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="chol_HDL_rat">Cholesterol/HDL Ratio</Label>
                    <Input
                      id="chol_HDL_rat"
                      type="number"
                      {...register("chol_HDL_rat", { valueAsNumber: true })}
                    />
                    {errors.chol_HDL_rat && (
                      <p className="text-sm text-red-500">
                        {errors.chol_HDL_rat.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      {...register("height", { valueAsNumber: true })}
                    />
                    {errors.height && (
                      <p className="text-sm text-red-500">
                        {errors.height.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      {...register("weight", { valueAsNumber: true })}
                    />
                    {errors.weight && (
                      <p className="text-sm text-red-500">
                        {errors.weight.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="BMI">BMI</Label>
                    <Input
                      id="BMI"
                      type="number"
                      {...register("BMI", { valueAsNumber: true })}
                    />
                    {errors.BMI && (
                      <p className="text-sm text-red-500">
                        {errors.BMI.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="systolic_BP">Systolic BP</Label>
                    <Input
                      id="systolic_BP"
                      type="number"
                      {...register("systolic_BP", { valueAsNumber: true })}
                    />
                    {errors.systolic_BP && (
                      <p className="text-sm text-red-500">
                        {errors.systolic_BP.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="diastolic_BP">Diastolic BP</Label>
                    <Input
                      id="diastolic_BP"
                      type="number"
                      {...register("diastolic_BP", { valueAsNumber: true })}
                    />
                    {errors.diastolic_BP && (
                      <p className="text-sm text-red-500">
                        {errors.diastolic_BP.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="waist">Waist (cm)</Label>
                    <Input
                      id="waist"
                      type="number"
                      {...register("waist", { valueAsNumber: true })}
                    />
                    {errors.waist && (
                      <p className="text-sm text-red-500">
                        {errors.waist.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="hip">Hip (cm)</Label>
                    <Input
                      id="hip"
                      type="number"
                      {...register("hip", { valueAsNumber: true })}
                    />
                    {errors.hip && (
                      <p className="text-sm text-red-500">
                        {errors.hip.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="waist_hip_ratio">Waist-Hip Ratio</Label>
                    <Input
                      id="waist_hip_ratio"
                      type="number"
                      {...register("waist_hip_ratio", { valueAsNumber: true })}
                    />
                    {errors.waist_hip_ratio && (
                      <p className="text-sm text-red-500">
                        {errors.waist_hip_ratio.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/4 space-y-1">
                    <Label htmlFor="diabetes">Diabetes</Label>
                    <Input id="diabetes" {...register("diabetes")} />
                    {errors.diabetes && (
                      <p className="text-sm text-red-500">
                        {errors.diabetes.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-5">
                  <div className="md:w-1/3 space-y-1">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      {...register("age", { valueAsNumber: true })}
                    />
                    {errors.age && (
                      <p className="text-sm text-red-500">
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                  <div className="md:w-1/3 space-y-1">
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" {...register("gender")} />
                    {errors.gender && (
                      <p className="text-sm text-red-500">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end mt-5">
              <Button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Adding..." : "Add new client"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  );
}
