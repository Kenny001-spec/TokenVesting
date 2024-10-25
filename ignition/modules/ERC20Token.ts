import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CeloTokenModule = buildModule("CeloTokenModule", (m) => {
  const celotoken = m.contract("CeloToken");
 
  return { celotoken };
  
});

export default CeloTokenModule;

