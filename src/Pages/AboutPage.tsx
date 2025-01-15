import BreadCrumbs from "@/components/BreadCrumbs";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Smartphones & Accessories",
    content:
      "Latest devices from top brands, along with essential add-ons like cases, chargers, and more"
  },
  {
    id: 2,
    title: "Laptops & Computers",
    content: "Powerful machines for work, gaming, and creativity"
  },
  {
    id: 3,
    title: "Smart Home Devices",
    content: "Tools to automate and simplify your living space"
  },
  {
    id: 4,
    title: "Wearable Technology",
    content:
      "Smartwatches, fitness trackers, and other wearables to keep you connected and healthy"
  },
  {
    id: 5,
    title: "Gaming Gear",
    content: "From consoles to headsets, everything a gamer needs"
  },
  {
    id: 6,
    title: "Audio Equipment",
    content: "High-quality headphones, speakers, and sound systems"
  }
];

export const AboutPage = () => {
  return (
    <div>
      <header className="h-[29rem] max-sm:h-full font-rajdhani relative w-full">
        <img
          src="https://media.istockphoto.com/id/1212275616/photo/a-toy-luggage-trolley-made-of-metal-and-plastic-carrying-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=Bc8oZOobl6hM4CKwd8TP1tvxglPoI_XMI3ZAVAixxQY="
          alt="cover"
          className="h-full w-full object-cover"
        />
        <article className="absolute h-full w-full  top-0 bg-background-banner ">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold text-white dark:text-gray-100">
              About Us
            </h1>
            <p className="text-lg max-sm:text-[16px] text-center max-md:w-full max-md:px-4 max-sm:w-full max-sm:px-4  w-[50%] text-gray-300 dark:text-gray-300 mt-4">
              At Global Tech, we are passionate about bridging the gap between
              cutting-edge technology and our customers.We aim to be your
              one-stop destination for the latest gadgets, electronics, and tech
              accessories that elevate your lifestyle.
            </p>
            <div className="bg-background-banner rounded-full px-2">
              <BreadCrumbs />
            </div>
          </div>
        </article>
      </header>
      <section className="px-8 mt-8 max-sm:mt-0">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            className="flex gap-8 max-sm:flex-col justify-between w-full"
          >
            <figure className="max-sm:w-full w-[40%] h-[15rem]">
              <img
                src="https://media.istockphoto.com/id/1481370371/photo/portrait-of-enthusiastic-hispanic-young-woman-working-on-computer-in-a-modern-bright-office.jpg?s=612x612&w=0&k=20&c=8kNce9Ruc9F2KXvnwf0stWQXCwwQTBCrW8efrqhUIa4="
                alt="mission"
                className="h-full object-cover w-full"
              />
            </figure>

            <article className="w-[60%] max-sm:w-full">
              <p className="text-lg font-bold mb-4">Our Mission</p>
              <p className="text-sm leading-[1.5rem] ">
                Our mission is to provide innovative, high-quality, and
                affordable tech solutions to our customers while ensuring
                exceptional service and a seamless shopping experience.
              </p>
              <ul className="list-disc mt-2 text-sm leading-[1.5rem] ml-7">
                <li>
                  Deliver the latest technology products at unbeatable prices
                </li>
                <li>Simplify the way people access the tech they need</li>
                <li>
                  Foster trust through transparency and top-tier customer
                  support
                </li>
              </ul>
            </article>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            className="flex max-sm:hidden gap-8"
          >
            <article className="w-[60%]">
              <p className="text-lg font-bold mb-4">Our Vision</p>

              <p className="text-sm leading-[1.5rem]">
                Our vision is to create a world where technology is accessible,
                empowering, and transformative for everyone. We strive to become
                the go-to destination for tech enthusiasts and professionals
                alike, providing solutions that cater to the diverse needs of
                our global community.
              </p>

              <ul className="list-disc mt-2 text-sm ml-7 leading-[1.5rem]">
                <li>
                  Empowering Innovation: We envision a future where innovation
                  drives progress. By connecting our customers to the latest
                  advancements in technology, we aim to empower individuals,
                  businesses, and communities to thrive in the digital age.
                </li>
                <li>
                  Global Reach with Local Impact: Our goal is to make
                  cutting-edge technology accessible to everyone, regardless of
                  location. We aspire to bring technology closer to underserved
                  regions, ensuring that no one is left behind in the journey
                  toward a smarter world.
                </li>
                <li>
                  Sustainability Through Technology: As advocates for
                  sustainable practices, we envision a future where technology
                  plays a pivotal role in environmental conservation. By
                  offering energy-efficient products and promoting eco-conscious
                  choices, we aim to contribute to a greener planet.
                </li>
              </ul>
            </article>
            <figure className="  w-[40%] h-[15rem]">
              <img
                src="https://media.istockphoto.com/id/1278669948/photo/hand-touch-connects-business-disruption-partners-handshake-with-world-globe-cityscape.jpg?s=612x612&w=0&k=20&c=nfCvpBsapjU1NHa5EYe7QvWeChoOBCt6YvP9tnTqih0="
                alt="mission"
                className="h-full object-cover w-full"
              />
            </figure>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            className="hidden max-sm:flex max-sm:flex-col gap-8"
          >
            <figure className=" w-full h-[15rem]">
              <img
                src="https://media.istockphoto.com/id/1278669948/photo/hand-touch-connects-business-disruption-partners-handshake-with-world-globe-cityscape.jpg?s=612x612&w=0&k=20&c=nfCvpBsapjU1NHa5EYe7QvWeChoOBCt6YvP9tnTqih0="
                alt="mission"
                className="h-full object-cover w-full"
              />
            </figure>
            <article className="w-full">
              <p className="text-lg font-bold mb-4">Our Vision</p>

              <p className="text-sm leading-[1.5rem]">
                Our vision is to create a world where technology is accessible,
                empowering, and transformative for everyone. We strive to become
                the go-to destination for tech enthusiasts and professionals
                alike, providing solutions that cater to the diverse needs of
                our global community.
              </p>

              <ul className="list-disc mt-2 text-sm ml-7 leading-[1.5rem]">
                <li>
                  Empowering Innovation: We envision a future where innovation
                  drives progress. By connecting our customers to the latest
                  advancements in technology, we aim to empower individuals,
                  businesses, and communities to thrive in the digital age.
                </li>
                <li>
                  Global Reach with Local Impact: Our goal is to make
                  cutting-edge technology accessible to everyone, regardless of
                  location. We aspire to bring technology closer to underserved
                  regions, ensuring that no one is left behind in the journey
                  toward a smarter world.
                </li>
                <li>
                  Sustainability Through Technology: As advocates for
                  sustainable practices, we envision a future where technology
                  plays a pivotal role in environmental conservation. By
                  offering energy-efficient products and promoting eco-conscious
                  choices, we aim to contribute to a greener planet.
                </li>
              </ul>
            </article>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            className="flex flex-col gap-2"
          >
            <article>
              <p className="text-lg font-bold mb-4">What We Offer</p>
              <div className="grid justify-center max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3 gap-4 ">
                {data.map((data) => (
                  <Card
                    key={data.id}
                    className="w-[18rem] max-sm:w-full max-md:w-full max-lg:w-full"
                  >
                    <CardHeader className="py-1">
                      <CardTitle className="text-sm font-bold">
                        {data.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm py-1">
                      {data.content}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </article>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            className="flex  max-sm:hidden gap-8"
          >
            <article className="w-[60%]">
              <p className="text-lg font-bold mb-4">Our Core Values</p>

              <ul className=" mt-2 text-sm flex flex-col gap-2">
                <li className="bg-slate-300 dark:bg-slate-600 pt-1">
                  <p className="border-b py-1 ml-1">Innovation</p>
                  <p className="bg-slate-200 dark:bg-slate-500 pl-1">
                    Staying ahead of trends to bring you the latest and greatest
                    in tech.
                  </p>
                </li>
                <li className="bg-slate-300 dark:bg-slate-600 pt-1">
                  <p className="border-b py-1 ml-1">Quality</p>
                  <p className="bg-slate-200 dark:bg-slate-500 pl-1">
                    Offering only products that meet our rigorous standards
                  </p>
                </li>
                <li className="bg-slate-300 dark:bg-slate-600 pt-1">
                  <p className="border-b py-1 ml-1">Sustainability</p>
                  <p className="bg-slate-200 dark:bg-slate-500 pl-1">
                    Committed to reducing our carbon footprint through
                    eco-friendly practices
                  </p>
                </li>
              </ul>
            </article>
            <figure className="  w-[40%] h-[15rem]">
              <img
                src="https://images.unsplash.com/photo-1600469984476-c713650f1b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                alt="mission"
                className="h-full object-cover w-full"
              />
            </figure>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            className="hidden  max-sm:flex max-sm:flex-col gap-8"
          >
            <figure className="  w-full h-[15rem]">
              <img
                src="https://images.unsplash.com/photo-1600469984476-c713650f1b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                alt="mission"
                className="h-full object-cover w-full"
              />
            </figure>
            <article className="w-full">
              <p className="text-lg font-bold mb-4">Our Core Values</p>

              <ul className=" mt-2 text-sm flex flex-col gap-4">
                <li className="bg-slate-300 dark:bg-slate-600 pt-1">
                  <p className="border-b py-1 ml-1">Innovation</p>
                  <p className="bg-slate-200 dark:bg-slate-500 pl-1">
                    Staying ahead of trends to bring you the latest and greatest
                    in tech.
                  </p>
                </li>
                <li className="bg-slate-300 dark:bg-slate-600 pt-1">
                  <p className="border-b py-1 ml-1">Quality</p>
                  <p className="bg-slate-200 dark:bg-slate-500 pl-1">
                    Offering only products that meet our rigorous standards
                  </p>
                </li>
                <li className="bg-slate-300 dark:bg-slate-600 pt-1">
                  <p className="border-b py-1 ml-1">Sustainability</p>
                  <p className="bg-slate-200 dark:bg-slate-500 pl-1">
                    Committed to reducing our carbon footprint through
                    eco-friendly practices
                  </p>
                </li>
              </ul>
            </article>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1
            }}
            className="flex max-sm:flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-4  mx-auto">
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{
                  duration: 1
                }}
                className="relative"
              >
                <img
                  src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=FbH7i1I3oCXoRfZKFvGj3jMXnsljD8mPmDmvY4IxQuA="
                  alt="Team Member 1"
                  className="w-full h-auto max-sm:h-[5rem] object-cover rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{
                  duration: 1
                }}
                className="relative -mt-5"
              >
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbSUyMGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Team Member 2"
                  className="w-full h-auto max-sm:h-[5rem] object-cover rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{
                  duration: 1
                }}
                className="relative"
              >
                <img
                  src="https://media.istockphoto.com/id/1340887756/photo/outside-of-logistics-distributions-warehouse-diverse-team-of-workers-loading-delivery-truck.webp?a=1&b=1&s=612x612&w=0&k=20&c=3TJPqXE1ecLxYRP3kxvw_HI_hLcjAfitmHI6iJhCquQ="
                  alt="Team Member 3"
                  className="w-full h-[10rem] max-sm:h-[5rem] object-cover rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{
                  duration: 1
                }}
                className="relative -mt-5"
              >
                <img
                  src="https://media.istockphoto.com/id/1364482289/photo/small-business-owners.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kg7cWsSK10rMhUpDWtzHkte0wi4lHnbumaDP6wJA3z0="
                  alt="Team Member 4"
                  className="w-full max-sm:h-[5rem] max-sm:w-[30rem]  h-auto object-cover rounded-lg shadow-md"
                />
              </motion.div>
            </div>
            <article className="">
              <p className="text-lg font-bold mb-4">Our Team</p>
              <p className="max-sm:text-sm   max-sm:leading-[1.5rem]">
                Behind Global Tech is a dedicated team of tech-savvy
                professionals. We work tirelessly to source the best products,
                test their quality, and provide detailed information to help you
                make informed decisions.
              </p>
            </article>
          </motion.div>
        </div>
      </section>
      <footer className="px-8">
        <Footer />
      </footer>
    </div>
  );
};
