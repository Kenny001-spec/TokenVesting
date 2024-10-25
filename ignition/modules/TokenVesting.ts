import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenVestingModule = buildModule("TokenVestingModule", (m) => {
  const tokenvesting = m.contract("TokenVesting");
 
  return { tokenvesting };
  
});

export default TokenVestingModule;

