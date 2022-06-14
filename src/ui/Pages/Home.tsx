import { HomePage } from "@/ui/Templates/HomePage";
import FakeData from '../../mock/fake.json'
import { Jobs } from "../Templates/HomePage/types";

const FakeJobs = FakeData;

export function Home() {
  return (
    <HomePage JobsData={FakeJobs as Jobs[]}/>
  )
}