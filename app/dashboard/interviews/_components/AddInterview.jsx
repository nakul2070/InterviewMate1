"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AddInterview = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    setOpen(false);
    console.log("form data:", data);
  };

  return (
    <div className="text-white">
      <Button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-gray-500 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white shadow-md rounded-xl transition-all duration-300"
      >
        + Add Interview
      </Button>
      
      <Dialog open={open}>
        <DialogContent className="bg-gray-500 border-gray-400 shadow-lg rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-gray-200 text-xl font-semibold">
              Schedule New Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="font-bold text-gray-300">Project Name</label>
                  <Input
                    className="bg-gray-500 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                    {...register("name", { required: true })}
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-300">Company Name</label>
                  <Input
                    className="bg-gray-500 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                    {...register("companyName", { required: true })}
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-300">Candidate Name</label>
                  <Input className="bg-gray-500 border border-gray-600 text-gray-200 rounded-lg p-2" />
                </div>
                <div>
                  <label className="font-bold text-gray-300">Helper Name</label>
                  <Input className="bg-gray-500 border border-gray-600 text-gray-200 rounded-lg p-2" />
                </div>
                <div>
                  <label className="font-bold text-gray-300">Tech Stack</label>
                  <Input
                    className="bg-gray-500 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                    {...register("techStack", { required: true })}
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-300">Date</label>
                  <input
                    className="border border-gray-600 bg-gray-500 text-gray-200 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
                    type="date"
                    {...register("date", { required: true })}
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-300">Rounds</label>
                  <input
                    className="border border-gray-600 bg-gray-500 text-gray-200 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
                    type="number"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-300">Time</label>
                  <input
                    className="border border-gray-600 bg-gray-500 text-gray-200 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
                    type="time"
                  />
                </div>
                <div className="flex justify-end gap-3 mt-4">
                  <Button
                    onClick={() => setOpen(false)}
                    className="bg-gray-600 hover:bg-gray-500 text-white shadow-md rounded-lg transition-all duration-300"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white shadow-lg rounded-lg transition-all duration-300"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddInterview;
