import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Services() {

    const services: { nameService: string, description: string, description2: string }[] = [
        {
            nameService: "Full-Stack Web Application Development",
            description: "Design and development of customized web applications, using Angular for the front end and Symfony or Next.js for the back end. Ideal for businesses looking to digitalize their services.",
            description2: "Creation of secure, scalable SaaS platforms for subscription-based models, allowing clients to manage their services online."
        },
        {
            nameService: "E-commerce and Product Catalogs",
            description: "Online Stores and Shopping Carts: Set up online stores with product management, shopping carts, and a complete order processing system. Stripe integration for secure payments.",
            description2: "PIM (Product Information Management): Development of product catalog management tools, enabling businesses to centralize and organize their product information."
        },
        {
            nameService: "Performance Optimization and Website Redesign",
            description: "Optimization of Existing Applications: Analysis and improvement of web application performance, load time optimization, and code refactoring.",
            description2: "Front-End or Back-End Redesign: Modernization of user interfaces with Angular and back-end restructuring with Symfony or Next.js."
        },
        {
            nameService: "Technical Support",
            description: "Support and Maintenance: Providing technical support, maintenance, and continuous optimization services for applications already in production.",
            description2: ""
        },
    ]
    return (
        <section>
            <h3 className="text-4xl text-center" id="services">Services</h3>
            <div className="grid md:grid-cols-1 md:mt-4 lg:grid-cols-2 gap-2 mt-3 justify-center justify-items-center">
                {
                    services.map((service) => (
                        <Card key={service.nameService}>
                            <CardHeader>
                                <CardTitle>{service.nameService}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li className="list-disc">{service.description}</li>
                                    {service.description2.length > 0 ?
                                        <li className="list-disc">{service.description2}</li> : ""}
                                </ul>
                            </CardContent>
                        </Card>
                    ))
                }

            </div>
        </section>
    )
}
