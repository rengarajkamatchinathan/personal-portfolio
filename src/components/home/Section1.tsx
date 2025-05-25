import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";



const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="min-h-screen relative flex items-center justify-center"
      id={id}
    >
      {/* Remove any background classes since parent has video */}
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 flex flex-col items-center justify-center text-center max-w-3xl w-full">
        <Column classNames="w-full items-center justify-center">
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--textColorLight)] mb-2 uppercase tracking-wide font-mono">
            Engineer, Developer, Freelancer
          </p>

          <div className="inline-flex items-center text-glow">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[var(--textColor)] mr-3">
              I'm
            </h1>
            <FlipWords
              words={["Rengaraj K.", "@RengarajK."]}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[var(--primaryColor)] animate-glow"
            />
          </div>

          <p className="mt-4 text-base md:text-lg font-semibold text-[var(--textColorLight)] max-w-md">
            I'll bring revolution to the world through technology
          </p>

          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
          </div>
        </Column>

        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Follow me here</p>

          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">
                    {typeof link.icon === "string" ? null : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </span>
                </Link>
              );
            })}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;