import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import BoxHeader from "@/components/BoxHeader";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
} from "recharts";
import { useTheme } from "@mui/material";
import { useMemo } from "react";

const Row2 = (props: Props) => {
  const { palette } = useTheme();
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  return (
    <>
      <DashboardBox gridArea='d'>
        <BoxHeader
          title='Operational vs Non-Operational Expenses'
          slideText='+4%'
        />
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: -0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey='name'
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              orientation='left'
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
              yAxisId='left'
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
              yAxisId='right'
              orientation='right'
            />
            <Tooltip />
            <Line
              yAxisId='left'
              type='monotone'
              dataKey='Non Operational Expenses'
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId='right'
              type='monotone'
              dataKey='Operational Expenses'
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea='e' />
      <DashboardBox gridArea='f' />
    </>
  );
};

export default Row2;
