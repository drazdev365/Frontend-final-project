import React, { useState } from "react";
import { Button, Input, Textarea, Typography, Dialog, Spinner, DialogFooter, DialogHeader, DialogBody } from "@material-tailwind/react";
import { generateEmailContent } from "../aiAgent/EmailContentGenerator";

export function ContactSection14() {
    const [messageType, setMessageType] = useState("listing-inquiry"); // State to hold selected message type
    const [prompt, setPrompt] = useState(""); // State to hold the user's input prompt for AI
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal visibility
    const [isLoading, setIsLoading] = useState(false); // State for loading spinner

    const handleGeneratePrompt = async () => {
        if (prompt.trim() === "") {
            alert("Please provide a prompt.");
            return;
        }
        setIsLoading(true); // Set loading to true when the AI is processing

        try {
            const resp = await generateEmailContent(prompt, messageType);

            if (resp === "Service unavailable!") {
                setPrompt("")
                setFormData({ ...formData, message: "" });
            } else {
                setFormData({ ...formData, message: resp });
                setPrompt("")
            }
            
        } catch (error) {
            setPrompt("")
            console.error("Error generating prompt:", error);
            setFormData({ ...formData, message: "" });
        } finally {
            setIsLoading(false); // Set loading to false once the AI finishes
            setIsModalOpen(false); // Close the modal after the message is generated
        }
    };

    const handleMessageTypeChange = (type) => {
        setMessageType(type);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.message ||
            !messageType
        ) {
            alert("Please fill in all fields before submitting.");
            return; // Stop the function if any field is empty
        }
    
        setIsLoading(true);
        const requestBody = {
            ...formData,
            messageType,
        };

        try {
            const response = await fetch(
                "https://topcar-email-server.onrender.com/api/email/send-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            if (response.ok) {
                alert("Message sent successfully!");
    
                setIsLoading(false);
                // Clear the form data after successful submission
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
            } else {
                alert("There was an error sending your message.");
                setIsLoading(false);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send the message.");
        }
    };

    return (
        <section className="px-8 py-8 lg:py-16">
            <div className="container mx-auto text-center">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-4 !text-base lg:!text-2xl"
                >
                    Customer Support
                </Typography>
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:!text-5xl"
                >
                    We're Here for Your Car Shopping Needs
                </Typography>
                <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                    Have questions about a car listing, need help with our platform, or want to share feedback? Our team is ready to assist you at every step of your car buying journey.
                </Typography>

                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                    <div className="max-w-full list-none transition-none overflow-hidden w-full h-full">
                        <div id="g-mapdisplay" className="h-full w-full max-w-full">
                            <iframe
                                className="h-full w-full border-0"
                                src="https://www.google.com/maps/embed/v1/place?q=kwara&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            ></iframe>
                        </div>
                    </div>

                    {/* Generate Message Button */}


                    {/* AI Message Generation Modal */}
                    < Dialog

                        size="xs"
                        open={isModalOpen}
                        handler={() => setIsModalOpen(false)}
                    >
                        <div className="p-6">
                            <DialogHeader>

                                <Typography variant="h5" className="mb-4">
                                    Generate {messageType} message
                                </Typography>
                            </DialogHeader>
                            <DialogBody>

                                <Input
                                    color="gray"
                                    label="Enter your inquiry prompt"
                                    disabled={isLoading}
                                    size="lg"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    className="mb-4"
                                />
                            </DialogBody>
                            <DialogFooter>
                                <Button
                                    variant="text"
                                    color="red"
                                    disabled={isLoading}
                                    onClick={() => setIsModalOpen(false)}
                                    className="mr-1"
                                >
                                    Cancel
                                </Button>
                                <Button variant="gradient"
                                    disabled={isLoading}
                                    className="flex items-center gap-3" 
                                    color="green"
                                    onClick={handleGeneratePrompt}>

                                    {isLoading ? (
                                        <Spinner size="xs" className="mr-2" />
                                    ) : null}
                                    {isLoading ? "Generating..." : "Generate"}
                                </Button>
                            </DialogFooter>

                        </div>
                    </ Dialog>

                    {/* Form to submit data */}
                   <div className="relative flex px-5 py-3 justify-center items-center">
                   {isLoading ? (
                            <div className="flex items-center z-50 justify-center absolute w-full h-full bg-black/10 ">
                                 <Spinner size="xs" className="mr-2" />
                            </div>
                                       
                                    ) : null}
                   <form
                        onSubmit={handleSubmit}
                        className="flex relative rounded-lg overflow-hidden flex-col gap-4  w-full"
                    >
                        
                       
                        <Typography
                            variant="small"
                            className="text-left !font-semibold !text-gray-600"
                        >
                            Select Options for Business Engagement
                        </Typography>
                        <div className="flex gap-4">
                            <Button
                                variant="outlined"
                                className={`max-w-fit ${messageType === "listing-inquiry" ? "bg-black text-white" : ""}`}
                                value={messageType}
                                onClick={() => handleMessageTypeChange("listing-inquiry")}
                            >
                                Listing Inquiry
                            </Button>
                            <Button
                                variant="outlined"
                                value={messageType}
                                className={`max-w-fit ${messageType === "platform-support" ? "bg-black text-white" : ""}`}
                                onClick={() => handleMessageTypeChange("platform-support")}
                            >
                                Platform Support
                            </Button>
                        </div>

                        {/* Form fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    First Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="focus:border-t-gray-900"
                                    containerProps={{
                                        className: "min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div>
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    Last Name
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="focus:border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium !text-gray-900"
                            >
                                Your Email
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="name@email.com"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="focus:border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <Typography
                                    variant="small"
                                    className="mb-2 text-left font-medium !text-gray-900"
                                >
                                    Your Message
                                </Typography>
                                <p
                                    className="w-fit bg-gradient-to-tr from-blue-500 to-blue-700 text-white text-xs font-bold px-2 flex justify-center items-center py-1 rounded-md h-fit  cursor-pointer"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Generate Message with AI
                                </p>
                            </div>
                            <Textarea
                                rows={6}
                                color="gray"
                                placeholder="Type your message here, e.g., questions about a car listing or platform features."
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="focus:border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <Button type="submit" className="w-full" color="gray">
                            Send message
                        </Button>
                    </form>
                   </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection14;
