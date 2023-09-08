/**
 * Represents different types and measurements of jitter.
 * Provides methods for various jitter calculations.
 */
export class Jitter {
    RJ: number;  // Random Jitter
    DJ: {
        DDJ: number;  // Data-Dependent Jitter
        BUJ: number;  // Bounded Uncorrelated Jitter
    };
    TJ: number;  // Total Jitter

    /**
     * Initializes a new instance of the Jitter class.
     * @param RJ - Random Jitter value.
     * @param DDJ - Data-Dependent Jitter value.
     * @param BUJ - Bounded Uncorrelated Jitter value.
     */
    constructor(RJ: number, DDJ: number, BUJ: number) {
        this.RJ = RJ;
        this.DJ = {
            DDJ: DDJ,
            BUJ: BUJ
        };
        this.TJ = this.calculateTotalJitter();
    }

    /**
     * Calculate the Time Interval Error (TIE) between actual and ideal edge positions.
     * @param actualEdgePosition - The actual position of the edge.
     * @param idealEdgePosition - The ideal position of the edge.
     * @returns The Time Interval Error value.
     */
    static TIE(actualEdgePosition: number, idealEdgePosition: number): number {
        return actualEdgePosition - idealEdgePosition;
    }

    /**
     * Compute the difference in periods of consecutive cycles to determine cycle-to-cycle jitter.
     * @param period1 - The period of the first cycle.
     * @param period2 - The period of the second cycle.
     * @returns The cycle-to-cycle jitter value.
     */
    static cycleToCycleJitter(period1: number, period2: number): number {
        return period2 - period1;
    }

    /**
     * Calculate the variation in the average period of N cycles to determine N-Cycle Jitter.
     * @param cycles - An array of cycle values.
     * @returns The N-Cycle Jitter value.
     */
    static nCycleJitter(cycles: number[]): number {
        const sum = cycles.reduce((acc, val) => acc + val, 0);
        const average = sum / cycles.length;
        return cycles.map(cycle => cycle - average).reduce((acc, val) => acc + val, 0) / cycles.length;
    }

    /**
     * Compute the RMS jitter value based on phase noise density and jitter bandwidth.
     * @param L - A function representing phase noise density.
     * @param f1 - The lower limit of the jitter bandwidth.
     * @param f2 - The upper limit of the jitter bandwidth.
     * @returns The RMS jitter value.
     */
    static rmsJitterFromPhaseNoise(L: (f: number) => number, f1: number, f2: number): number {
        let integral = 0;
        const step = 0.001;  
        for (let f = f1; f < f2; f += step) {
            integral += L(f) * step;
        }
        return Math.sqrt(integral);
    }

    /**
     * Estimates the Total Jitter for a given bit error rate (BER).
     * @param BER - The bit error rate value.
     * @returns The estimated Total Jitter.
     */
    totalJitterEstimation(BER: number): number {
        const n = this.getMultiplierForBER(BER);
        return this.DJ.DDJ + n * this.RJ;
    }

    /**
     * Compute the Total Jitter by summing Random Jitter, Data-Dependent Jitter, and Bounded Uncorrelated Jitter.
     * @returns The Total Jitter value.
     */
    private calculateTotalJitter(): number {
        return this.RJ + this.DJ.DDJ + this.DJ.BUJ;
    }

    /**
     * Retrieves the constant multiplier value based on a given BER.
     * @param BER - The bit error rate value.
     * @returns The multiplier value for the provided BER.
     */
    private getMultiplierForBER(BER: number): number {
        if (BER === 1e-12) return 12;
        throw new Error("Unsupported BER");
    }
}
