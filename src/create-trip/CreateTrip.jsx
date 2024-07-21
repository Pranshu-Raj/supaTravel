import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  AI_PROMPT,
  SelectBugetOptions,
  SelectTravelesList,
} from "@/constants/Options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { apiKey, chatSession, genAI } from "@/service/AiModel";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  // const [openDailog, setOpenDailog] = useState(false);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async () => {

    if (
      (formData?.noOfDays > 10 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveller
    ) {
      toast("Please fill the complete form.");

      return;
    }
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveller)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    console.log(FINAL_PROMPT);
    console.log(apiKey);
    console.log(genAI);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  };

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl-px-72 px-5 mt-10">
        <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
        <p className="mt-3 font-gray-500 text-xl">
          Just provide some basic information and our
          <span className="text-[#1166e6] "> AI</span> trip planner will
          generate a customized itinerary based on your preferences.
        </p>

        <div className="mt-20 flex flex-col gap-10">
          <div>
            <h2 className="text-xl my-3 font-medium">
              Enter Destination of choice.
            </h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: (v) => {
                  setPlace(v);
                  handleInputChange("location", v);
                },
              }}
            />
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning your trip for?
            </h2>
            <Input
              placeholder={"Ex.3"}
              type="number"
              onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBugetOptions.map((item, index) => (
              <div
                key={index}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formData?.budget == item.title && "shadow-lg border-black"
                }`}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formData?.traveller == item.people && "shadow-lg border-black"
                }`}
                onClick={() => handleInputChange("traveller", item.people)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className=" my-10 justify-end flex">
          <Button onClick={onGenerateTrip}>Generate Trip</Button>
        </div>

        
      </div>
    </>
  );
}

export default CreateTrip;
