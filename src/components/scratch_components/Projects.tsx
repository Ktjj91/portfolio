import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Petitepattestyle from "@/assets/images/me.png"
import {Badge} from "@/components/ui/badge";
import  {getScopedI18n,getI18n} from "@/app/locales/server";

export default  async function Projects() {

    const scoppedTProjects = await getScopedI18n('Projects');
    const t  = await  getI18n();

    const projects = [
        {
            name:scoppedTProjects('name'),
            image:Petitepattestyle,
            description:scoppedTProjects('description'),
            tags:["Next.js","Docker","GCP","Stripe","Resend"],
            isOn:true
        }
    ]
    return (
        <section className="text-4xl mt-2">
            <h1 className="text-center" id="projects">{t('Project')}</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 mt-3 justify-center	 ">
                {
                    projects.map((project) => (
                        <Card className="w-[300px]"  key={project.name}>
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

                            <CardFooter className="gap-2 flex-wrap ">
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
