import { Button } from "@/ui/Atoms/Button";
import { Text } from "@/ui/Atoms/Text";
import { Title } from "@/ui/Atoms/Title";
import { InfoJob } from "@/ui/Molecules/InfoJob";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { ContainerCard } from "./styles";
import { JobCardProps } from "./types";

export function JobCard({
  data: {
    id,
    infos,
    title
  },
  className,
}: JobCardProps) {
  return (
    <ContainerCard className={className}>
      <div id="id-and-title-job">
        <Text
          fontFamily="var(--font-Inter)"
          fontWeight={600}
          fontSize='1rem'
          lineHeight="1.625rem"
          color="var(--purple-250)"
        >
          {id}
        </Text>
        <Title
          asElement="h2"
          fontFamily="var(--font-IBM)"
          fontWeight={600}
          fontSize='2rem'
          lineHeight="2.125rem"
          color="var(--purple-600)"
        >
          {title}
        </Title>
      </div>

      <InfoJob 
        data={infos}
      />

      <div id="job-button-control">
        <Button
          borderRadius="5px"
          padding="10px"
          customColor={{
            background: 'var(--white-50)',
            text: '--var(--purple-500)'
          }}
          className="button-controls-base"
        >
          <FiEdit3 size={18} color="--var(--purple-500)"/>
        </Button>

        <Button
          borderRadius="5px"
          padding="10px"
          customColor={{
            background: 'var(--white-50)',
            text: '--var(--purple-500)'
          }}
          className="button-controls-base"
        >
          <AiOutlineDelete size={18} color="--var(--purple-500)"/>
        </Button>
      </div>


    </ContainerCard>
  )
}