import {
  Avatar,
  Box,
  Chip,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AccountCircle, Tag } from "@mui/icons-material";
import { StoryCharacter, StoryType } from "../../types/main";
import { toHSLObject } from "../../utility/colors";

export default function StoryInfo({ storyInfo }: { storyInfo: StoryType }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const baseHSLObj = toHSLObject(theme.palette.background.paper);
  const textHSLObj = toHSLObject(theme.palette.text.primary);
  const primaryHSLObj = toHSLObject(theme.palette.primary.main);
  const secondaryHSLObj = toHSLObject(theme.palette.secondary.main);

  return (
    <Paper
      sx={{
        p: isDesktop ? 8 : 3,
        py: isDesktop ? "auto" : 5,
        backgroundColor: `hsl(${
          primaryHSLObj.hue - (theme.palette.mode === "dark" ? 5 : 0)
        }, ${
          primaryHSLObj.saturation - (theme.palette.mode === "dark" ? 42 : 0)
        }%, ${
          baseHSLObj.lightness - (theme.palette.mode === "light" ? 5 : -7)
        }%)`,
        color: `hsl(${primaryHSLObj.hue}, ${
          primaryHSLObj.saturation - (theme.palette.mode === "light" ? 65 : 10)
        }%, ${
          primaryHSLObj.lightness - (theme.palette.mode === "light" ? 25 : -5)
        }%)`,
        // backgroundColor: theme.palette.primary.light,
        // color: theme.palette.primary.contrastText,
        "& a:link, & a:visited": {
          textDecoration: "none",
          color: theme.palette.secondary.light,
          fontWeight: 600,
        },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        fontSize="3rem"
      >
        {storyInfo.title}
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle1"
        fontSize="0.9rem"
        color={`hsl(${primaryHSLObj.hue}, ${primaryHSLObj.saturation - 55}%, ${
          primaryHSLObj.lightness - 10
        }%)`}
      >
        written by{" "}
        <Link href={storyInfo.authorProfileLink}>{storyInfo.author}</Link>
      </Typography>
      <Box position="relative" mt={4} mb={8} maxWidth="35em" margin="auto">
        <Typography sx={{ position: "relative", zIndex: 2 }}>
          {storyInfo.summary}
        </Typography>
        <Box
          position="absolute"
          top={-20}
          left={isDesktop ? -30 : 0}
          width={35}
          height={35}
          borderRadius="50%"
        >
          <Typography
            variant="h2"
            fontSize="3rem"
            color={`hsl(${primaryHSLObj.hue}, ${
              primaryHSLObj.saturation -
              (theme.palette.mode === "light" ? 10 : 45)
            }%, ${
              textHSLObj.lightness + (theme.palette.mode === "light" ? 45 : -40)
            }%)`}
            sx={{
              userSelect: "none",
            }}
          >
            “
          </Typography>
        </Box>
        <Box
          position="absolute"
          bottom={0}
          right={isDesktop ? 50 : 0}
          width={35}
          height={35}
          borderRadius="50%"
        >
          <Typography
            variant="h2"
            fontSize="3rem"
            color={`hsl(${primaryHSLObj.hue}, ${
              primaryHSLObj.saturation -
              (theme.palette.mode === "light" ? 10 : 45)
            }%, ${
              textHSLObj.lightness + (theme.palette.mode === "light" ? 45 : -40)
            }%)`}
            sx={{
              userSelect: "none",
            }}
          >
            ”
          </Typography>
        </Box>
      </Box>
      <Stack
        direction={isDesktop ? "row" : "column"}
        gap={isDesktop ? 0 : 3}
        mt={8}
        justifyContent={isDesktop ? "space-between" : "flex-start"}
      >
        <Box>
          <Typography fontSize="0.9rem" fontWeight={700}>
            Cast
          </Typography>
          <Stack direction="row" gap={1} id="characters" flexWrap="wrap">
            {storyInfo.characters?.map((chara: StoryCharacter) => (
              <Chip
                label={chara.name}
                sx={{
                  backgroundColor: `hsl(${
                    secondaryHSLObj.hue +
                    (theme.palette.mode === "dark" ? 3 : 0)
                  }, ${
                    secondaryHSLObj.saturation -
                    (theme.palette.mode === "dark" ? 35 : 0)
                  }%, ${
                    secondaryHSLObj.lightness +
                    (theme.palette.mode === "light" ? 25 : -29)
                  }%)`,
                  color: `hsl(${secondaryHSLObj.hue}, ${
                    secondaryHSLObj.saturation -
                    (theme.palette.mode === "light" ? 60 : 30)
                  }%, ${
                    secondaryHSLObj.lightness -
                    (theme.palette.mode === "light" ? 20 : -10)
                  }%)`,
                  boxShadow: theme.shadows[1],
                  "& .MuiChip-icon": {
                    color: `hsl(${secondaryHSLObj.hue}, ${
                      secondaryHSLObj.saturation -
                      (theme.palette.mode === "light" ? 60 : 30)
                    }%, ${
                      secondaryHSLObj.lightness -
                      (theme.palette.mode === "light" ? 20 : -10)
                    }%) !important`,
                  },
                }}
                avatar={
                  chara.icon ? (
                    <Avatar
                      alt={chara.name}
                      src={chara.icon}
                      sx={{
                        overflow: "clip",
                        backgroundColor: "transparent !important",
                        boxShadow: "inset 0px 2px 4px rgb(0, 0, 0, 0.25)",
                      }}
                      imgProps={{
                        style: {
                          width: "400%",
                          height: "400%",
                          marginTop: 60,
                        },
                      }}
                    />
                  ) : undefined
                }
                icon={
                  !chara.icon ? <AccountCircle fontSize="small" /> : undefined
                }
              />
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography fontSize="0.9rem" fontWeight={700}>
            Tags
          </Typography>
          <Stack direction="row" gap={1} id="tags" flexWrap="wrap">
            {storyInfo.tags?.map((tag: string) => (
              <Chip
                label={tag}
                sx={{
                  backgroundColor: `hsl(${
                    secondaryHSLObj.hue +
                    (theme.palette.mode === "dark" ? 3 : 0)
                  }, ${
                    secondaryHSLObj.saturation -
                    (theme.palette.mode === "dark" ? 35 : 0)
                  }%, ${
                    secondaryHSLObj.lightness +
                    (theme.palette.mode === "light" ? 25 : -29)
                  }%)`,
                  color: `hsl(${secondaryHSLObj.hue}, ${
                    secondaryHSLObj.saturation -
                    (theme.palette.mode === "light" ? 60 : 30)
                  }%, ${
                    secondaryHSLObj.lightness -
                    (theme.palette.mode === "light" ? 20 : -10)
                  }%)`,
                  boxShadow: theme.shadows[1],
                  "& .MuiChip-icon": {
                    color: `hsl(${secondaryHSLObj.hue}, ${
                      secondaryHSLObj.saturation -
                      (theme.palette.mode === "light" ? 60 : 30)
                    }%, ${
                      secondaryHSLObj.lightness -
                      (theme.palette.mode === "light" ? 20 : -10)
                    }%) !important`,
                  },
                }}
                icon={<Tag fontSize="small" />}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
      <Box mt={6} mx="auto">
        <Typography fontWeight={700}>Author's note:</Typography>
        <Paper elevation={0} sx={{ p: 3, mt: 1 }}>
          {storyInfo.note}
        </Paper>
      </Box>
    </Paper>
  );
}
