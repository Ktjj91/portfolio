import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Petitepattestyle from "@/assets/images/me.png"
import {Badge} from "@/components/ui/badge";

export default function Projects() {

    const projects = [
        {
            name:"Petitepattestyle",
            image:Petitepattestyle,
            description:"An e-commerce site for small dogs",
            tags:["Next.js","Docker","Google Cloud Platform","Stripe","Resend"],
            isOn:true
        }
    ]
    return (
        <section className="text-4xl mt-2">
            <h1 className="text-center" id="projects">Projects</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 mt-3 ">
                {
                    projects.map((project) => (

                        <Card  key={project.name}>
                            <CardHeader>
                                <Image className="text-center" src={project.image} alt={`Photo of ${project.name}`}  />
                                <CardTitle >{project.name}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            {
                                project.isOn ?   <CardContent>
                                    <a className="text-sm hover:underline" href="https://petitepattestyle.com/">View website</a>
                                </CardContent> : ""
                            }

                            <CardFooter className="space-x-2 ">
                                {
                                    project.tags.map(tag => (
                                        <Badge  key={tag}>{tag}</Badge>
                                    ))
                                }

                            </CardFooter>

                        </Card>
                    ))
                }

            </div>

        </section>
    )
}
