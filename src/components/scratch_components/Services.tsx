import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import  {getScopedI18n} from "@/app/locales/server";

export default  async function Services() {

    const scopedTServiceFullStack = await getScopedI18n("serviceFullstackDeveloper");
    const scopedTServiceEcom = await getScopedI18n("serviceEcom");
    const scopedTServicePerf = await (getScopedI18n('servicePerf'));
    const scopedTServiceSupport = await (getScopedI18n('serviceSupport'));
    const services: { nameService: string, description: string, description2: string }[] = [
        {
            nameService: scopedTServiceFullStack('name'),
            description: scopedTServiceFullStack('description'),
            description2: scopedTServiceFullStack("description2")
        },
        {
            nameService: scopedTServiceEcom('name'),
            description: scopedTServiceEcom('description'),
            description2:scopedTServiceEcom('description2')
        },
        {
            nameService: scopedTServicePerf('name'),
            description:scopedTServicePerf('description'),
            description2:scopedTServicePerf('description2')

        },
        {
            nameService: scopedTServiceSupport('name'),
            description: scopedTServiceSupport('description'),
            description2: ""
        },
    ]
    return (
        <section>
            <h3 className="text-4xl text-center" id="services">Services</h3>
            <div className="grid md:grid-cols-1 md:mt-4 lg:grid-cols-2 gap-2 p-3 mt-3 justify-center justify-items-center">
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
