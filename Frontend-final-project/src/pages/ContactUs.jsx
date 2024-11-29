import React, { useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactSection14() {
    const [messageType, setMessageType] = useState(""); // State to hold selected message type
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

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

        const requestBody = {
            ...formData,
            messageType,
        };

        try {
            const response = await fetch(
                "https://topcar-email-server.onrender.com/api/send-email",
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
            } else {
                alert("There was an error sending your message.");
            }
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
                    <div className="max-w-full list-none transition-none overflow-hidden w-[500px] h-[500px]">
                        <div id="g-mapdisplay" className="h-full w-full max-w-full">
                            <iframe
                                className="h-full w-full border-0"
                                src="https://www.google.com/maps/embed/v1/place?q=kwara&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            ></iframe>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 lg:max-w-sm"
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
                                className="max-w-fit"
                                onClick={() => handleMessageTypeChange("listing-inquiry")}
                            >
                                Listing Inquiry
                            </Button>
                            <Button
                                variant="outlined"
                                className="max-w-fit"
                                onClick={() => handleMessageTypeChange("platform-support")}
                            >
                                Platform Support
                            </Button>
                        </div>

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
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium !text-gray-900"
                            >
                                Your Message
                            </Typography>
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
        </section>
    );
}

export default ContactSection14;
