import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import PokemonHeader from "./PokemonHeader";
import { blueGrey, amber, brown } from "@mui/material/colors";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styled from "styled-components";
import {
  decimeterToMeters,
  hectogramToKg,
  numberWithCommas,
} from "../utils/number";

const PROFILE_BOX_TYPE = {
  ABILITY: "ability",
};

const STAT_NAME = {
  HP: "hp",
  ATTACK: "attack",
  DEFENSE: "defense",
  SPECIAL_ATTACK: "special-attack",
  SPECIAL_DEFENSE: "special-defense",
  SPEED: "speed",
};

const BORDER_RADIUS = "12px";
const BORDER_COLOR = "rgba(0, 0, 0, 0.1)";

const ProfileBox = styled(Box)`
  border-radius: ${BORDER_RADIUS};
  text-align: center;
  ${({ type }) =>
    type === PROFILE_BOX_TYPE.ABILITY &&
    "display: flex;justify-content: center;align-items: center;min-height: 2.5em;"};

  subtitle2 {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: ${({ type }) =>
      type === PROFILE_BOX_TYPE.ABILITY ? "0.6em" : "0.9em"};
  }

  svg {
    font-size: 0.9em;
    margin-right: 0.4em;
  }
`;

const HeaderText = styled(Typography)`
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;

  span {
    font-size: 0.9em;
    font-weight: 600;
    border-radius: 8px;
    margin-left: 0.5em;
  }
`;

const HrStyled = styled.hr`
  margin: 1.5em 0;
  border-color: ${BORDER_COLOR};
`;

const StatWrapper = styled.div`
  position: relative;
  border-radius: ${BORDER_RADIUS};
  text-align: center;
  border: 1px solid ${BORDER_COLOR};
  padding: 0.4em 0.3em;
`;

const StatHeader = styled.div`
  width: 60%;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;

const StatValue = styled(Typography)`
  margin: 0.4em 0 0.3em 0;
`;

const PokemonDetail = ({ pokemon, index }) => {
  const profileBox = ({ title, value, type = "", isHidden = false }) => (
    <ProfileBox bgcolor={blueGrey[50]} px={3} py={1} type={type}>
      {isHidden && <VisibilityOffIcon size="small" />}
      {title && (
        <Typography variant="subtitle2" component="subtitle2">
          {title}
        </Typography>
      )}
      {value && (
        <Typography variant="p" component="p" color={blueGrey[800]}>
          {numberWithCommas(value)}
        </Typography>
      )}
    </ProfileBox>
  );

  const renderPokemonProfile = () => (
    <Grid container columnSpacing={2}>
      <Grid item xs={6}>
        {profileBox({
          title: "height",
          value: numberWithCommas(decimeterToMeters(pokemon.height)) + " m",
        })}
      </Grid>
      <Grid item xs={6}>
        {profileBox({
          title: "weight",
          value: numberWithCommas(hectogramToKg(pokemon.weight)) + " kg",
        })}
      </Grid>
    </Grid>
  );

  const renderAbilities = () => (
    <>
      <Grid container columnSpacing={2} rowSpacing={1} alignItems="center">
        {pokemon.abilities.map(({ ability, is_hidden }, index) => (
          <Grid
            item
            xs={
              pokemon.abilities.length % 2 === 0
                ? 6
                : pokemon.abilities.length === index + 1
                ? 12
                : 6
            }
            key={`${ability.name}-${index}`}
          >
            {profileBox({
              title: ability.name,
              type: PROFILE_BOX_TYPE.ABILITY,
              isHidden: is_hidden,
            })}
          </Grid>
        ))}
      </Grid>
    </>
  );

  const toShortWord = (statName) => {
    switch (statName) {
      case STAT_NAME.HP:
        return "💖 HP";
      case STAT_NAME.ATTACK:
        return "🗡️ ATK";
      case STAT_NAME.DEFENSE:
        return "🛡️ DEF";
      case STAT_NAME.SPECIAL_ATTACK:
        return "⚔️ SpA";
      case STAT_NAME.SPECIAL_DEFENSE:
        return "🛡️ SpD";
      case STAT_NAME.SPEED:
        return "🐌 SPD";
      default:
        return null;
    }
  };

  const renderStats = () => (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      mt={2}
      spacing={2}
    >
      {pokemon.stats.map(({ base_stat, stat }) => (
        <Grid item xs={4} key={stat.name}>
          <StatWrapper>
            <StatHeader>{toShortWord(stat.name)}</StatHeader>
            <StatValue variant="p" component="p" color={blueGrey[600]}>
              {base_stat}
            </StatValue>
          </StatWrapper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <PokemonHeader pokemon={pokemon} index={index} />
      <HeaderText variant="h6" component="h6" my={2}>
        BASE EXP:{" "}
        <Typography
          component="span"
          bgcolor={amber[100]}
          color={amber[700]}
          px={1}
          py={0.4}
        >
          {pokemon.base_experience}
        </Typography>
      </HeaderText>
      <Box>{renderPokemonProfile()}</Box>
      <HrStyled />
      <HeaderText variant="h6" component="h6" my={2}>
        abilities
      </HeaderText>
      {renderAbilities()}
      {renderStats()}
    </>
  );
};

export default PokemonDetail;
