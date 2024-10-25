import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TokenVestingModule = buildModule("TokenVestingModule", (m) => {
  const ERC20 = "0x74A33D37A1d3360d00fc8cFDA4e9325a6D64355b";
  const token = m.getParameter("token", ERC20);
  const tokenvesting = m.contract("TokenVesting", [token]);
 
  return { tokenvesting };
  
});

export default TokenVestingModule;
