

import SideDrawer from "./ui/SideDrawer";
import { Category } from "@/types";
import MainNav from "./MainNav";

type Props = {
  data: Category[];
};

export default function MobileNavbar({ data }: Props) {
  return (
    <SideDrawer>
      <MainNav data={data} />
    </SideDrawer>
  );
}
