// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import { jobViewTableData, } from "variables/general";
import ViewJobTitle from "../Tables/components/ViewJobTitle";

export default function ViewJobPost(){
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <ViewJobTitle
        title={"View Job Post Table"}
        captions={["Job Desc", "Experience Type", "Opening Position", "No. of Vacancy", "Qualification Required","Other Details","View More" ]}
        data={jobViewTableData}
      />
    </Flex>
  );
}
