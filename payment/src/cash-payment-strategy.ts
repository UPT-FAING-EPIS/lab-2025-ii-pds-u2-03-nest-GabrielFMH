import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * @class CashPaymentStrategy
 * @description Implements the payment strategy for cash transactions.
 * @implements {IPaymentStrategy}
 */
export class CashPaymentStrategy implements IPaymentStrategy {
    /**
     * @method Pay
     * @description Processes the payment using cash.
     * @param {number} amount - The amount to be paid.
     * @returns {boolean} Always returns true for this implementation.
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " By Cash");
        return true;
    }
}