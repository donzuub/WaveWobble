import { Jitter } from '../src/models/jitter';

function demonstrateBasicUsage() {
    console.log('--- WaveWobble Basic Usage ---');

    // Instantiate a new Jitter object
    const myJitter = new Jitter(0.05, 0.02, 0.03);
    console.log(`Random Jitter (RJ): ${myJitter.RJ}`);
    console.log(`Data-Dependent Jitter (DDJ): ${myJitter.DJ.DDJ}`);
    console.log(`Bounded Uncorrelated Jitter (BUJ): ${myJitter.DJ.BUJ}`);
    console.log(`Total Jitter (TJ): ${myJitter.TJ}`);

    // Calculate Time Interval Error (TIE)
    const tie = Jitter.TIE(1.02, 1.00);
    console.log(`Time Interval Error (TIE): ${tie}`);

    // Determine Cycle-to-Cycle Jitter
    const cycleJitter = Jitter.cycleToCycleJitter(1.02, 1.03);
    console.log(`Cycle-to-Cycle Jitter: ${cycleJitter}`);

    // Calculate N-Cycle Jitter for an array of cycle values
    const nCycle = Jitter.nCycleJitter([1.02, 1.03, 1.04]);
    console.log(`N-Cycle Jitter: ${nCycle}`);

    // Estimate Total Jitter for a given BER
    const estimatedTJ = myJitter.totalJitterEstimation(1e-12);
    console.log(`Estimated Total Jitter for BER 1e-12: ${estimatedTJ}`);
}

// Execute the demonstration
demonstrateBasicUsage();
