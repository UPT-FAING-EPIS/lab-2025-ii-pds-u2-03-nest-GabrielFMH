import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * @class DebitCardPaymentStrategy
 * @description Implements the payment strategy for debit card transactions.
 * @implements {IPaymentStrategy}
 */
export class DebitCardPaymentStrategy implements IPaymentStrategy {
    /**
     * @method Pay
     * @description Processes the payment using a debit card.
     * @param {number} amount - The amount to be paid.
     * @returns {boolean} Always returns true for this implementation.
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " using Debit Card");
        return true;
    }
}