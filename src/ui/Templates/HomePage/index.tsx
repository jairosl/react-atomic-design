import { Header } from "@/ui/Organisms/Header";
import { JobCard } from "@/ui/Organisms/JobCard";
import { Container } from "./styles";
import { HomePageProps } from "./types";

export function HomePage({ JobsData }: HomePageProps) {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <main>
          {JobsData.map(job => {
            return (
              <JobCard key={job.id} data={job} className="card"/>
            )
          })}
        </main>
      </div>
      
    </Container>
  )
}