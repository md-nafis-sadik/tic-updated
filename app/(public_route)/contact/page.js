import PageHeader from "@/components/common/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";

import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ContactMap from "@/components/contact/ContactMap";

function page() {
  return (
    <>
      <PageHeader title="Contact us" />

      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="contact"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h2 className="text-orange-600 text-base font-medium uppercase mb-2">
              GET IN TOUCH WITH US
            </h2>
            <h1 className="mb-4 md:text-4xl h text-xl font-medium md:font-bold dark:text-white">
              WE&apos;RE ALWAYS EAGER TO HEAR FROM YOU!
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                <ContactMap />
              </div>
            </div>

            <div className="lg:col-span-4 ">
              <div className="lg:ms-8">
                <div className="flex  bg-white p-5 rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                  <div className="text-center mx-auto flex items-center ">
                    <Phone size={30} classNameName="text-orange-500" />
                  </div>

                  <div className="flex-1 ms-6 ">
                    <h5 className="text-lg dark:text-white mb-2 font-semibold">
                      Phone
                    </h5>
                    <div classNameName="flex flex-col space-y-2">
                      <Link
                        href="tel:+88 01722-952895"
                        className="text-slate-500"
                      >
                        +88 01722-952895,
                      </Link>
                      <Link
                        href="tel:+88 01722-952895"
                        className="text-slate-500"
                      >
                        +88 01722-952895,
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex  bg-white mt-4 p-5 rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                  <div className="text-center mx-auto flex items-center ">
                    <Mail size={30} classNameName="text-orange-500" />
                  </div>

                  <div className="flex-1 ms-6 ">
                    <h5 className="text-lg dark:text-white mb-2 font-semibold">
                      Email
                    </h5>
                    <div classNameName="flex flex-col space-y-2">
                      <Link
                        href="mailto:inof@ticlimited.com.bd"
                        className="text-slate-500"
                      >
                        inof@ticlimited.com.bd
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex mt-4 bg-white py-5 rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                  <div className="ms-6">
                    <div classNameName="flex gap-5">
                      <Globe size={30} classNameName="text-orange-500" />
                      <h1 className="text-lg dark:text-white mb-2 font-semibold">
                        Location
                      </h1>
                    </div>

                    <Separator />

                    <div classNameName="flex justify-between items-center py-5 gap-3 ">
                      <div>
                        <MapPin size={20} classNameName="text-orange-500" />
                      </div>
                      <div>
                        <h1 classNameName="font-semibold">
                          Rajshahi Head Office
                        </h1>
                        <p>
                          AH.Tower (5th Floor), Alokar More, Ghoramara, Boalia,
                          Rajshahi
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div classNameName="flex justify-between items-center py-5 gap-3 ">
                      <div>
                        <MapPin size={20} classNameName="text-orange-500" />
                      </div>
                      <div>
                        <h1 classNameName="font-semibold">Kashorhat Branch</h1>
                        <p>
                          Keshorhat Bypass Road, Mizan Complex 3rd Floor,
                          keshorhat Pourosova, Mohonpur, Rajshahi
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div classNameName="flex justify-between items-center py-5 gap-3 ">
                      <div>
                        <MapPin size={20} classNameName="text-orange-500" />
                      </div>
                      <div>
                        <h1 classNameName="font-semibold">Dhaka Branch</h1>
                        <p>
                          House No. 47, Road No-15, Rupnagor, Mirpur-02,
                          Dhaka-1216
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div classNameName="py-14 px-8">
        <ContactForm />
      </div>
    </>
  );
}

export default page;
