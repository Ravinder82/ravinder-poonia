
import { CircleCheck, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Journey = () => {
  return (
    <section className="py-24 bg-navy/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">My Background</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            A path from policy research to AI-driven development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-teal" />
              Education
            </h3>
            
            <div className="relative pl-8 border-l border-white/20">
              <div className="absolute w-4 h-4 bg-teal rounded-full -left-2 top-1.5"></div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Technology in Computer Science</h4>
                <p className="text-white/70 mb-2">Kurukshetra University, Haryana (56%)</p>
                <p className="text-teal text-sm">2010-2015</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                    Vb.Net
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                    WordPress
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative pl-8 border-l border-white/20">
              <div className="absolute w-4 h-4 bg-teal rounded-full -left-2 top-1.5"></div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-2">12th in Science (64%)</h4>
                <p className="text-white/70 mb-2">Holy Heart Sr. Sec. School, Jind, Haryana</p>
                <p className="text-teal text-sm">C.B.S.E-2008</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 mt-12 flex items-center">
              <Award className="mr-3 text-teal" />
              Certifications
            </h3>
            
            <div className="relative pl-8 border-l border-white/20">
              <div className="absolute w-4 h-4 bg-teal rounded-full -left-2 top-1.5"></div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Completion Certificate for .Net & Web Application Development from Microsoft IT Academy</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Certificate of Appreciation from District Magistrate, New Delhi for service during COVID-19</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Certification for Research in Public Policy by Delhi Legislative Assembly Research Centre</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Briefcase className="mr-3 text-teal" />
              Professional Experience
            </h3>
            
            <Accordion type="single" collapsible className="border-white/10">
              <AccordionItem value="fellowship" className="border-white/10 mb-6 bg-secondary/30 rounded-xl">
                <AccordionTrigger className="px-6 text-white hover:no-underline">
                  <div className="text-left">
                    <span className="text-teal text-sm font-medium">Sep 2019 - Sep 2021</span>
                    <h4 className="text-xl font-bold text-white mt-1">Fellowship in Public Policy & Research</h4>
                    <p className="text-white/70">Delhi Assembly Research Centre</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-white/80">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-teal mb-2">Office of Member of Legislative Assembly (Sep 2019 - March 2020)</h5>
                      <ul className="space-y-2">
                        {[
                          "Media & Social Media Management for MLA Office (AC 33 Dwarka, Delhi)",
                          "Office Digitalisation & Grievance Mechanism Setup",
                          "MLA-LAD Fund Utilisation & Liaising with Government Departments",
                          "Demographic Issues Research & Management"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-teal mb-2">Office of District Magistrate, New Delhi District (COVID-19 April 2020- Oct 2020)</h5>
                      <ul className="space-y-2">
                        {[
                          "Data Management and analytical reporting for various COVID-19 applications",
                          "Handling data implementation for 'Commcare' portal",
                          "Analytics for COVID Care Centers, Home Isolation & Containment zones",
                          "Management of 'Home Quarantine' app for tracking contacts"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-teal mb-2">Delhi Legislative Assembly (Nov 2020 - Jan 2021)</h5>
                      <ul className="space-y-2">
                        {[
                          "Research in Public Policy framework for Women Empowerment in Delhi",
                          "Website development for all information on DARC Fellows"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-teal mb-2">Office of Health Minister, Govt of NCT Delhi (May 2021 - July 2021)</h5>
                      <ul className="space-y-2">
                        {[
                          "Project Management and Analytical Reporting for Oxygen Concentrator Scheme",
                          "Mohalla Clinics Digitalisation & Coordination",
                          "Research and Analysis for various health department projects"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="socialmedia" className="border-white/10 mb-6 bg-secondary/30 rounded-xl">
                <AccordionTrigger className="px-6 text-white hover:no-underline">
                  <div className="text-left">
                    <span className="text-teal text-sm font-medium">Sep 2018 - Sep 2019</span>
                    <h4 className="text-xl font-bold text-white mt-1">Social Media Manager & Data Analyst</h4>
                    <p className="text-white/70">Value One Digital Media Pvt. Ltd, Delhi</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-white/80">
                  <ul className="space-y-2">
                    {[
                      "Social Media Platforms Synchronisation & Content Flow Management",
                      "Social Media Analysis",
                      "Advertising Campaigns, Public Relations & Outdoor Media Campaigns Management",
                      "SMS/IVR Media Campaigns Management",
                      "Public Query & Redressal Mechanism Management"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="freelance" className="border-white/10 mb-6 bg-secondary/30 rounded-xl">
                <AccordionTrigger className="px-6 text-white hover:no-underline">
                  <div className="text-left">
                    <span className="text-teal text-sm font-medium">2022 - 2023</span>
                    <h4 className="text-xl font-bold text-white mt-1">Freelance Projects</h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-white/80">
                  <ul className="space-y-2">
                    {[
                      "Setting up broadcast lists on WhatsApp for AAP Delhi office bearers",
                      "Data Collection and Analytical Reporting of Form 20 data for Delhi elections",
                      "Micro-Targeting through Bulk-SMS and IVRs for voters in multiple states",
                      "Outdoor Media Project in Delhi for Chariot Media Digital Company"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8">
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4">Skills Developed</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Data Analysis",
                    "Project Management",
                    "Social Media Strategy",
                    "Public Policy Research",
                    "Technical Documentation",
                    "Web Development",
                    "Team Leadership",
                    "Media Campaigns"
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <CircleCheck size={16} className="text-teal mr-2 flex-shrink-0" />
                      <span className="text-white/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
