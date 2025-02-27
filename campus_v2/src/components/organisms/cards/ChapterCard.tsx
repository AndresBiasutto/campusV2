import React, { useState } from "react";
import ChapterCardBody from "../../molecules/ChapterCardBody";
import ChapterCardButtons from "../../molecules/ChapterCardButtons";

interface ChapterCardProps {
  name?: string;
  chapterOrder?: number;
  lections?: { id: string; name: string; lectionOrder: number; text: string }[];
  chapterId?: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({
  name,
  chapterOrder,
  lections,
  chapterId
}) => {
  const [toggle, settoggle] = useState(true);

  const handleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <div className="w-full h-auto bg-light-secondary dark:bg-dark-secondary dark:bg-dark-secondaryw-full overflow-hidden flex flex-col md:flex-row justify-start items-center mt-2 gap-4 p-2  rounded-tl-lg rounded-br-lg transition-all">
      <p className=" w-full md:w-10 font-bold text-4xl h-full flex items-start justify-start md:justify-center">
        {chapterOrder}
      </p>
      <ChapterCardBody
        toggle={toggle}
        name={name || "Default Name"}
        lections={lections}
        chapterOrder={chapterOrder}
        chapterId={chapterId}
      />
      <ChapterCardButtons toggle={toggle} handleAction={handleToggle} />
    </div>
  );
};

export default ChapterCard;
