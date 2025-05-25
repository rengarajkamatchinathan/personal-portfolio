"use client";

import { useState } from "react";
import { RepoType, type IProjectItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  const [flipped, setFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const screenshots = project.screenshots || [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent flip on image buttons
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div
      className="relative w-full min-w-[calc(100%-2rem)] sm:min-w-[25rem] md:min-w-[28rem] max-h-[30rem] mx-auto [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-[30rem] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <CardBox classNames="w-full h-full flex flex-col cursor-pointer p-4 gap-4 items-center justify-between rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] group overflow-hidden">
            
            {/* Icon */}
            <div className="w-[2.75rem] h-[2.75rem] rounded-full overflow-hidden">
              <Image
                src={project.icon}
                alt={`project-${project.title}`}
                width={100}
                height={100}
                sizes="100%"
                loading="lazy"
                placeholder="blur"
                blurDataURL={project.icon}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <p className="text-lg/6 font-semibold text-center">{project.title}</p>

            {/* Repo Type */}
            <div
              className={`rounded-full py-[0.25rem] px-[0.75rem] text-xs font-semibold capitalize text-center border ${
                project.repoType === RepoType.Private
                  ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
                  : "text-[var(--successColor)] border-[var(--successColor50)]"
              }`}
            >
              {project.repoType === RepoType.Private ? "Private" : "Public"}
            </div>

            {/* Project Screenshot with buttons */}
            <div className="relative flex-grow w-full rounded-[var(--borderRadius)] overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-sm group-hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={screenshots[currentImageIndex]}
                alt={`screenshot-${project.title}-${currentImageIndex}`}
                width={1280}
                height={720}
                sizes="100%"
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://upload.wikimedia.org/wikipedia/en/9/92/Windows_11_Desktop.png"
                className="w-full h-full object-cover"
              />

              {/* Previous Button */}
     {/* Previous Button */}
{/* Previous Button */}
<button
  onClick={handlePrev}
  className="absolute top-1/2 left-2 -translate-y-1/2 z-10 px-3 py-1.5 text-lg font-bold border-2 rounded-md text-yellow-400 border-yellow-400 bg-red-800/80 hover:bg-yellow-500 hover:text-red-800 transition-all shadow-[0_0_10px_#facc15] backdrop-blur-sm"
>
  ‹
</button>

{/* Next Button */}
<button
  onClick={handleNext}
  className="absolute top-1/2 right-2 -translate-y-1/2 z-10 px-3 py-1.5 text-lg font-bold border-2 rounded-md text-yellow-400 border-yellow-400 bg-red-800/80 hover:bg-yellow-500 hover:text-red-800 transition-all shadow-[0_0_10px_#facc15] backdrop-blur-sm"
>
  ›
</button>



            </div>

            {/* Tags */}
            {project.tags && project.tags?.length > 0 && (
              <Row classNames="w-full items-center justify-center flex-wrap mt-auto">
                {project.tags.map((tag, i) => (
                  <p
                    key={`tag-${i}`}
                    className="rounded-[var(--borderRadius)] border border-[var(--textColor50)] py-[.125rem] px-2 mr-2 mb-2 text-xs/6 font-normal"
                  >
                    {tag}
                  </p>
                ))}
              </Row>
            )}
          </CardBox>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <CardBox classNames="w-full h-full cursor-pointer p-6 items-center justify-center rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-inner overflow-auto">
            
            {/* Links */}
            <Row classNames="items-center justify-center mt-2 gap-2">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  aria-label={`${project.title} GitHub`}
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-2.5 !aspect-square !border-[var(--textColor)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-sm text-[var(--textColor)]" />
                </Link>
              )}
              {project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  aria-label={`${project.title} Live`}
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-2.5 !aspect-square !border-[var(--textColor)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faEye} className="text-sm text-[var(--textColor)]" />
                </Link>
              )}
            </Row>

            {/* Description */}
            <p className="text-sm text-center mt-4">
              <Balancer>{project.description}</Balancer>
            </p>
          </CardBox>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
