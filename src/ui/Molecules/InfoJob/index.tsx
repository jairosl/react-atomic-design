import { formatPrice } from "@/services/formatPrice";
import { Tag } from "@/ui/Atoms/Tag";
import { Text } from "@/ui/Atoms/Text";

import { Container, WrapperText, Status } from "./styles";
import { infoJobProps } from "./types";


export function InfoJob({
  data: {
    status,
    value,
    daysForDelivery
  } 
}: infoJobProps) {
  return(
    <Container>
      <WrapperText className="deadline">
        <Text
          fontFamily="var(--font-Inter)"
          fontSize="0.75rem"
          lineHeight="1.375rem"
          color="var(--purple-250)"
          fontWeight={600}
        >
          PRAZO
        </Text>

        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1rem"
          lineHeight="1.625rem"
          color="var(--purple-500)"
          fontWeight={600}
        >
          {daysForDelivery} dias para entrega
        </Text>    
      </WrapperText>

      <WrapperText className="value">
        <Text
          fontFamily="var(--font-Inter)"
          fontSize="0.75rem"
          lineHeight="1.375rem"
          color="var(--purple-250)"
          fontWeight={600}
        >
          Valor
        </Text>

        <Text
          fontFamily="var(--font-Inter)"
          fontSize="1rem"
          lineHeight="1.625rem"
          color="var(--purple-500)"
          fontWeight={600}
        >
          {formatPrice(value)}
        </Text>    
      </WrapperText>

      <Status>
        {status === 'closed' && (
          <Tag 
            text="Encerrado"
            padding="0.5rem 1.5rem"
            customColors={{
              background: 'var(--red-50)',
              text: 'var(--red-150)'
            }}
          />
        )}

        {status === 'inprogress' && (
          <Tag 
            text="Em andamento"
            padding="0.5rem 1.5rem"
            customColors={{
              background: 'var(--green-50)',
              text: 'var(--green-400)'
            }}
          />
        )}
      </Status>


    </Container>
  )
}