"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AddEmployee = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    setOpen(false);
    console.log("Employee added:", data);
  };

  return (
    <div className="px-2 py-2">
      <Button
        className="bg-gradient-to-r from-gray-600 to-gray-600 text-white hover:scale-105 transition-all shadow-lg rounded-lg px-4 py-2"
        onClick={() => setOpen(true)}
      >
        + Add New Employee
      </Button>

      <Dialog open={open}>
        <DialogContent className="bg-gray-700 text-gray-800 border-gray-300 shadow-2xl rounded-xl p-5">
          <DialogHeader>
            <DialogTitle className="text-gray-900 text-xl font-bold tracking-wide">
              Add New Employee
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="py-2">
                  <label className="font-bold text-gray-600">EMPLOYEE NAME</label>
                  <Input className="bg-gray-600 text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" {...register("name", { required: true })} />
                </div>

                <div className="py-2">
                  <label className="font-bold text-gray-600">EMAIL</label>
                  <Input className="bg-gray-600 text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" {...register("email", { required: true })} />
                </div>

                <div className="py-2">
                  <label className="font-bold text-gray-600">CONTACT NO.</label>
                  <Input className="bg-gray-600 text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" type="number" {...register("contact", { required: true })} />
                </div>

                <div className="py-2">
                  <label className="font-bold text-gray-600">TECH STACK</label>
                  <Input className="bg-gray-600 text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" {...register("techStack")} />
                </div>

                <div className="flex justify-end gap-2">
                  <Button className="bg-gray-300 text-gray-800 hover:bg-gray-400 shadow-md rounded-lg px-4 py-2 transition-all" onClick={() => setOpen(false)}>Cancel</Button>
                  <Button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:scale-105 transition-all shadow-lg rounded-lg px-4 py-2" type="submit">Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddEmployee;
