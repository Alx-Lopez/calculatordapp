import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { CalculatordappRepo } from "../target/types/calculatordapp_repo";

describe("calculatordapp_repo", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.CalculatordappRepo as Program<CalculatordappRepo>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
