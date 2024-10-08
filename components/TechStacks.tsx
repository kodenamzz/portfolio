import { techStacks } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { useTranslations } from "next-intl";

const TechStacks = () => {
  const t = useTranslations("TechStacks");
  return (
    <div id="tech-stacks" className="pt-4 pb-20">
      <h1 className="heading">{t("Skills")}</h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={techStacks} direction="left" speed="slow" />
      </div>
    </div>
  );
};

export default TechStacks;
