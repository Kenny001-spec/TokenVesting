import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DltTokenModule = buildModule("DltTokenModule", (m) => {
  const dlttoken = m.contract("DltToken");
 
  return { dlttoken };
  
});

export default DltTokenModule;

