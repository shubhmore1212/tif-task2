import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import { IInterViewSettings } from "../../interface/forms";
import { useData } from "./DataProvider";
import {
  FORM,
  interviewDurationOptions,
  interviewLanguageOptions,
  interviewModeOptions,
} from "./constants";
import { handleInputChange } from "@src/utils/helper";

const InterviewDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {
  const { setState } = useData();
  const {
    errors,
    touched,
    handleSubmit,
    values,
    setFieldTouched,
    setFieldValue,
  } = useFormik<IInterViewSettings>({
    initialValues: {
      interviewMode: "",
      interviewDuration: "",
      interviewLanguage: "",
    },
    validationSchema: Yup.object().shape({
      interviewMode: Yup.string().required("Interview Mode is required"),
      interviewDuration: Yup.string().required(
        "Interview Duration is required"
      ),
      interviewLanguage: Yup.string().required(
        "Interview Language is required"
      ),
    }),
    onSubmit: (values) => {
      alert("Form successfully submitted");
    },
  });

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit}>
      <Box width="100%">
        <FormSelect
          label="Interview Mode"
          placeholder="Select interview mode"
          name="interviewMode"
          options={interviewModeOptions}
          onChange={(name: string, value: string) => {
            handleInputChange(name, value, setState, FORM.INTERVIEW_SETTINGS);
            setFieldValue(name, value);
          }}
          onBlur={setFieldTouched}
          value={values?.interviewMode}
          error={errors?.interviewMode}
          touched={touched?.interviewMode}
        />
        <FormSelect
          label="Interview Duration"
          placeholder="Select interview duration"
          name="interviewDuration"
          options={interviewDurationOptions}
          onChange={(name: string, value: string) => {
            handleInputChange(name, value, setState, FORM.INTERVIEW_SETTINGS);
            setFieldValue(name, value);
          }}
          onBlur={setFieldTouched}
          value={values?.interviewDuration}
          error={errors?.interviewDuration}
          touched={touched?.interviewDuration}
        />
        <FormSelect
          label="Job Location"
          name="interviewLanguage"
          placeholder="Select interview language"
          options={interviewLanguageOptions}
          onChange={(name: string, value: string) => {
            handleInputChange(name, value, setState, FORM.INTERVIEW_SETTINGS);
            setFieldValue(name, value);
          }}
          onBlur={setFieldTouched}
          error={errors.interviewLanguage}
          touched={touched.interviewLanguage}
          value={values.interviewLanguage}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(1)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default InterviewDetailsForm;
