import { Image } from "../../Atoms/Image";
import { CustomLink } from "../../Atoms/Link";
import { Title } from "../../Atoms/Title";
import { ContainerUI } from "./styles";

export function Profile() {
  return(
    <ContainerUI>
      <div className="infos">
        <Title 
          asElement='h3'
          fontFamily="var(--font-IBM)"
          fontWeight={600}
          fontSize="1.25rem"
          lineHeight="1.875rem"
          color="var(--white-50)"
        >
          User Name
        </Title>

        <CustomLink 
          to="/"
          fontFamily="var(--font-IBM)"
          fontWeight={400}
          fontSize="0.875rem"
          lineHeight="1.5rem"
          color="var(--purple-250)"
        >
          ver perfil
        </CustomLink>


      </div>
      <Image 
        urlImage="https://picsum.photos/200"
        alt="User image"
        isWithdrawn
        height="64px"
        width="64px"
      />
    </ContainerUI>
  )
}