import { Text } from "@/ui/Atoms/Text";
import { ContainerSummary } from "./styles";
import { SummaryProps } from "./types";

export function Summary({ data: { closed, inProgressJobs } }: SummaryProps) {
  return (
    <ContainerSummary>
      <div className="total">
        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1.5rem"
          lineHeight="1.625rem"
          fontWeight={700}
        >
          {inProgressJobs + closed}
        </Text>

        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1rem"
          lineHeight="1.625rem"
          fontWeight={400}
          color="var(--white-150)"
        >
          Projetos ao total
        </Text>
      </div>

      <div className="progress">
        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1.5rem"
          lineHeight="1.625rem"
          fontWeight={700}
        >
          {inProgressJobs}
        </Text>

        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1rem"
          lineHeight="1.625rem"
          fontWeight={400}
          color="var(--white-150)"
        >
          Em andamento
        </Text>

      </div>

      <div className="closed">
        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1.5rem"
          lineHeight="1.625rem"
          fontWeight={700}
        >
          {closed}
        </Text>

        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1rem"
          lineHeight="1.625rem"
          fontWeight={400}
          color="var(--white-150)"
        >
          Encerrados
        </Text>
      </div>

    </ContainerSummary>
  )
}