import React, { useState } from "react";
import { Grid, Box, SelectChangeEvent } from "@mui/material";
import TicketTable from "./TicketTable";
import TicketSummary from "./TicketSummary";
import { TicketItem } from "../types";

const TicketData = ({
  data,
  filteredData,
  filterData,
  paginate,
}: {
  data: TicketItem[];
  filteredData: TicketItem[];
  filterData: (term: string) => void;
  paginate: {
    page: number;
    rowsPerPage: number;
    rowsCount: number;
    totalNumberOfPages: number;
    currentShowingMax: number;
    currentShowingMin: number;
    handleChangePage: (newPage: number) => void;
    handleChangeRowsPerPage: (event: SelectChangeEvent<number>) => void;
    activeRows: any[];
  };
}) => {
  const [selectedTicket, setSelectedTicket] = useState<TicketItem | null>(null);

  const onTicketItemClick = (item: TicketItem) => {
    setSelectedTicket(item);
  };

  return (
    <Box p={3} sx={{ background: "#f1f1f1" }}>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <TicketTable
            data={filteredData}
            selectedTicket={selectedTicket}
            onTicketItemClick={onTicketItemClick}
            filterData={filterData}
            paginate={paginate}
          />
        </Grid>
        <Grid item xs={0} lg={3}>
          <TicketSummary selectedTicket={selectedTicket} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketData;
