import { Box, Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SkeletonImageStyled = styled(Skeleton)`
  position: absolute;
  top: -2%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SkeletonPokemonItem = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <SkeletonImageStyled variant="circular" width={80} height={80} />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={156}
        sx={{ borderRadius: "16px" }}
      />
    </Box>
  );
};

export default SkeletonPokemonItem;
