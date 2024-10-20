import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
    
    
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Team"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]
              cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <img
                    src={item.iconUrl}
                    width={600}
                    height={600}
                    alt={item.title}
                    className="rounded-lg mt-4"
                  />
                <div className="flex flex-col justify-center items-center text-emerald-400 mx-auto mt-4">
                  
                  <p  className="font-code text-[1.35rem] font-bold text-n-1 uppercase tracking-wider">
                    
                    
                    {item.title}
                  </p>
                  <h4 className="">{item.text}</h4>
                  
                </div>
              </div>

              {<GradientLight />}

              <a
                className="absolute inset-0.5 bg-n-7 rounded-lg shadow-md"
                style={{ clipPath: "url(#benefits)" }}
                href={item.appUrl}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </a>

              {/* <ClipPath /> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;