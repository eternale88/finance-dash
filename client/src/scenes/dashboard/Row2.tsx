import DashboardBox from "@/components/DashboardBox";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea='d' />
      <DashboardBox gridArea='e' />
      <DashboardBox gridArea='f' />
    </>
  );
};

export default Row2;
