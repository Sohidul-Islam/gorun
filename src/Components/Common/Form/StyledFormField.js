import {
  Box,
  Checkbox,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import StyledInput from "../../Styled/StyledInput";
import StyledSwitch from "../../Styled/StyledSwitch";
import StyledFileDropzone from "../../Styled/StyledFileDropzone";
import FilterSelect from "../Filter/FilterSelect";
import ImagePreview from "./ImagePreview";
// import ImagePreview from "../Common/ImagePreview";
// import LoadingOverlay from "../Common/LoadingOverlay";
// import FilterDate from "../Filter/FilterDate";
// import FilterSelect from "../Filter/FilterSelect";
// import OptionsSelect from "../Filter/OptionsSelect";
// import StyledAutocomplete from "../Styled/StyledAutocomplete";
// import StyledCheckboxList from "../Styled/StyledCheckBoxList";
// import StyledChip from "../Styled/StyledChips";
// import StyledFileDropzone from "../Styled/StyledFileDropzone";
// import StyledInput from "../Styled/StyledInput";
// import StyledPasswordInput from "../Styled/StyledPasswordInput";
// import StyledSwitch from "../Styled/StyledSwitch";

function Wrapper({ tooltip, children }) {
  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        <Box>{children}</Box>
      </Tooltip>
    );
  }

  return children;
}

export default function StyledFormField({
  containerProps,
  label,
  labelComponent,
  labelProps,
  intputType,
  inputProps,
  tooltip,
}) {
  const theme = useTheme();
  return (
    <Wrapper tooltip={tooltip}>
      <Stack
        gap={2}
        {...(containerProps || {})}
        sx={{
          paddingTop: "12px",
          paddingBottom: "12px",
          ...(containerProps?.sx || {}),
        }}
      >
        {label && (
          <Typography
            variant="h5"
            {...(labelProps || {})}
            sx={{
              fontWeight: "600",
              fontSize: "15px",
              lineHeight: "18px",
              color: theme.palette.primary.main,
              ...(labelProps?.sx || {}),
            }}
          >
            {label}
          </Typography>
        )}

        {labelComponent && labelComponent}

        {/* text field */}
        {intputType === "text" && (
          <StyledInput
            {...(inputProps || {})}
            sx={{
              "& input": {
                paddingLeft: "18px",
                paddingRight: "18px",
                fontWeight: "500",
                fontSize: "15px",
                color: theme.palette.text.primary,
                ...(inputProps?.sx || {}),
              },
            }}
          />
        )}

        {/* text field toggle */}
        {intputType === "text-toggle" && (
          <Stack direction="row" alignItems="center" gap={5}>
            <Box flex={1}>
              <StyledInput
                fullWidth
                {...(inputProps || {})}
                sx={{
                  "& input": {
                    paddingLeft: "18px",
                    paddingRight: "18px",
                    fontWeight: "500",
                    fontSize: "15px",
                    color: theme.palette.text.primary,
                    ...(inputProps?.sx || {}),
                  },
                }}
              />
            </Box>
            <StyledSwitch
              checked={inputProps?.checked}
              onChange={inputProps?.onToggle}
            />
          </Stack>
        )}

        {/* textarea */}
        {intputType === "textarea" && (
          <StyledInput
            {...(inputProps || {})}
            sx={{
              height: "100px",

              "& .MuiInputBase-root": {
                height: "100%",
                paddingLeft: "18px",
                paddingRight: "18px",
              },

              "& textarea": {
                height: "100% !important",
                fontWeight: "500",
                fontSize: "15px",
                color: theme.palette.text.primary,
                ...(inputProps?.sx || {}),
              },
            }}
          />
        )}

        {/* file dropzone */}
        {intputType === "file" && (
          <Stack gap="30px" position="relative">
            <Box>
              <StyledFileDropzone {...(inputProps || {})} />
              {inputProps.helperText1 && (
                <Typography pt={2} variant="body3" display="block">
                  {inputProps.helperText1}
                </Typography>
              )}
              {inputProps.helperText2 && (
                <Typography variant="body3">
                  {inputProps.helperText2}
                </Typography>
              )}
            </Box>
            {inputProps.files?.length > 0 && (
              <ImagePreview
                files={inputProps.files}
                readOnly={inputProps.readOnly}
              />
            )}
          </Stack>
        )}

        {/* select */}
        {intputType === "select" && <FilterSelect {...(inputProps || {})} />}

        {/* autocomplete */}
        {intputType === "autocomplete" && (
          <Stack
            position="relative"
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            gap="16px"
            flexWrap="wrap"
            minHeight="48px"
          >
            <StyledAutocomplete
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {inputProps.multiple && (
                      <Checkbox color="secondary" checked={selected} />
                    )}
                    <span>{props.key}</span>
                  </div>
                </li>
              )}
              disableCloseOnSelect={inputProps.multiple}
              blurOnSelect={!inputProps.multiple}
              {...(inputProps || {})}
              sx={{
                ...(inputProps.readOnly && { pointerEvents: "none" }),
                "&:has(.MuiInputBase-input:focus)": {
                  width: "370px",
                  top: 0,
                },
                ...(inputProps.sx || {}),
              }}
              readOnly={inputProps.readOnly}
            />

            {/* tags */}
            {inputProps.multiple &&
              inputProps.value.map((item, index) => {
                if (inputProps.renderTags) {
                  return inputProps.renderTags(item, index);
                }
                return (
                  <StyledChip
                    key={inputProps.getTagKey?.(item) || item?._id}
                    label={inputProps?.getOptionLabel(item) || item?.name}
                    size="lg"
                    onDelete={() => {
                      inputProps.onChange(
                        undefined,
                        inputProps.value.filter(
                          (dItem, dIndex) => index !== dIndex
                        )
                      );
                    }}
                  />
                );
              })}
          </Stack>
        )}

        {/* options select */}
        {intputType === "optionsSelect" && <OptionsSelect {...inputProps} />}

        {/* select */}
        {intputType === "checkbox" && <StyledCheckboxList {...inputProps} />}

        {/* date */}
        {intputType === "date" && <FilterDate {...inputProps} />}

        {/* phone input */}
        {intputType === "phoneNumber" && (
          <PhoneInput
            style={{
              padding: "12px 18px",
              fontWeight: "500",
              fontSize: "15px",
              color: theme.palette.text.primary,
              borderRadius: "30px",
              background: theme.palette.background.secondary,
              outline: "0",
              border: "0",
              ...inputProps.phoneStyle,
            }}
            defaultCountry="LB"
            placeholder="Enter phone number"
            value={inputProps.value}
            international
            countryCallingCodeEditable={false}
            onChange={(value) => {
              try {
                inputProps.onChange(value);
              } catch (error) {
                console.log(error);
              }
            }}
          />
        )}

        {/* password */}
        {intputType === "password" && (
          <StyledPasswordInput
            {...(inputProps || {})}
            sx={{
              "& input": {
                paddingLeft: "18px",
                paddingRight: "18px",
                fontWeight: "500",
                fontSize: "15px",
                color: theme.palette.text.primary,
                ...(inputProps?.sx || {}),
              },
            }}
          />
        )}
      </Stack>
    </Wrapper>
  );
}
