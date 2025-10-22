/**
 * @interface IPaymentStrategy
 * @description Defines the contract for payment strategies in the payment system.
 */
export interface IPaymentStrategy {
    /**
     * @method Pay
     * @description Processes the payment for the specified amount.
     * @param {number} amount - The amount to be paid.
     * @returns {boolean} True if the payment is successful, false otherwise.
     */
    Pay(amount: number): boolean;
}