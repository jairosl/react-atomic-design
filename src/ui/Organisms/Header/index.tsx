import { FiAlertOctagon } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'

import { HeaderUI, ContainerUI, Icon } from "./styles";
import { Image } from '@/ui/Atoms/Image';
import { Text } from '@/ui/Atoms/Text';
import { Profile } from '@/ui/Molecules/Profile';
import { Summary } from '@/ui/Molecules/Summary';
import { Button } from '@/ui/Atoms/Button';

export function Header() {
  return (
    <ContainerUI>
      <HeaderUI>
        <div className="state-session">
          <Image
            urlImage="/logo.svg"
            height="48px"
            width="208px"
            alt="JobsCalc"
          />

          <div className="total-hours-free">
            <span>
              <FiAlertOctagon size={16} color="var(--orange-50)"/>
            </span>

            <Text
              fontFamily="var(--font-Inter)"
              fontWeight={500}
              fontSize="1rem"
              lineHeight="1.625rem"
              
            >
              Você tem 2 horas livres no seu dia
            </Text>
          </div>


          <Profile />
        </div>

        <div className="summary-session">
          <Summary
            data={{
              closed: 4,
              inProgressJobs: 7
            }}
          />

          <Button
            padding="0.75rem 2rem 0.75rem 0.75rem"
            customColor={
              {
                background: 'var(--orange-50)',
                text: 'var(--white-50)'
              }
            }
            borderRadius="5px"
          > 
            <div className="containerIcon">
              <Icon>
                <AiOutlinePlus size={22} color="var(--white-50)" className="plus"/>
              </Icon>
              <Text
                fontFamily="IBM Plex Sans"
                fontWeight={700}
                fontSize="0.875rem"
                lineHeight="1.625rem"
              >
                ADICIONAR NOVO JOB
              </Text>
            </div>

          </Button>

        </div>
      </HeaderUI>
    </ContainerUI>
  )
}