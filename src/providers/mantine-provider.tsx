import {
  Badge,
  Button,
  createTheme,
  Divider,
  Input,
  MantineColorsTuple,
  MantineProvider,
  Menu,
  NumberInput,
  Radio,
  RadioGroup,
  rem,
  Select,
  TagsInput,
  TextInput,
} from "@mantine/core";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const primary: MantineColorsTuple = [
  "#eef6fd",
  "#e4e8eb",
  "#cbcdcf",
  "#afb2b4",
  "#989a9c",
  "#888b8e",
  "#808488",
  "#6d7176",
  "#5f656b",
  "#4d5761",
] as const;
const secondary: MantineColorsTuple = [
  "#fbf3f5",
  "#e7e7e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#656565",
  "#5c5557",
] as const;

const text: MantineColorsTuple = [
  "#eff6fa",
  "#e6e8e9",
  "#cdcece",
  "#b1b3b4",
  "#999b9d",
  "#898d8f",
  "#808689",
  "#6d7477",
  "#5e676b",
  "#4c5a60",
] as const;

export const theme = createTheme({
  black: "#2B261E",
  breakpoints: {
    xs: "450px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  colors: {
    primary,
    secondary,
    text,
  },

  // fontFamilyMonospace: "Monaco, Courier, monospace",
  primaryColor: "primary",
  radius: {
    sm: "0.35rem",
    md: "0.55rem",
    lg: "0.8rem",
    xl: "1rem",
  },

  components: {
    Divider: {
      defaultProps: {
        color: "#DFDEDC",
      },
    },
    Badge: {
      defaultProps: {
        size: "lg",
        radius: "xl",
        fw: 600,
        variant: "light",
        style: {
          textTransform: "capitalize",
        },
      },
    },
    Menu: {
      defaultProps: {
        shadow: "lg",
      },
    },
    Input: {
      defaultProps: {
        size: "md",
        fw: 500,
        c: "primary",
        classNames: {
          input: '[type="tel"]:!text-left placeholder:text-sm ',
        },
      },
    },

    Select: {
      defaultProps: {
        size: "md",
        fw: 500,
        rightSection: <ChevronDown size={12} />,
        classNames: {
          input: " placeholder:text-sm",
        },
        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },

    TextInput: {
      defaultProps: {
        size: "md",
        classNames: {
          input: " placeholder:text-sm",
        },

        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    TagsInput: {
      defaultProps: {
        size: "md",
        classNames: {
          inputField: " placeholder:text-sm",
        },

        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    NumberInput: {
      defaultProps: {
        size: "md",
        classNames: {
          input: " placeholder:text-sm",
        },

        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },

    Button: {
      defaultProps: {
        fw: 500,
        size: "md",
      },
    },

    RadioGroup: {
      defaultProps: {
        labelProps: {
          fw: 500,
        },
      },
    },
    Radio: {
      defaultProps: {
        fw: 600,
        c: "#817C74",
      },
    },
  },

  defaultRadius: "md",
  fontSizes: {
    xs: rem(11),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
    "2xl": rem(28),
  },
  headings: {
    fontWeight: "600",
    sizes: {
      h1: {
        fontSize: rem(36),
      },
      h2: {
        fontSize: rem(30),
      },
    },
  },
});

interface Props {
  children: ReactNode;
}
export default function Mantine_Provider({ children }: Props) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
