
abstract class BankAccount {

    private String accountNumber;
    private String accountHolderName;
    protected double balance;

    public BankAccount(String accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    public void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    public abstract void calculateInterest();
}

class SavingsAccount extends BankAccount {

    public SavingsAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public void calculateInterest() {
        double interest = balance * 0.05;
        System.out.println("Savings Interest: " + interest);
    }
}

class CurrentAccount extends BankAccount {

    public CurrentAccount(String accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public void calculateInterest() {
        System.out.println("Current Account has no interest.");
    }
}

public class Experiment10 {

    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount("SB101", "Aman", 10000);
        CurrentAccount ca = new CurrentAccount("CA201", "Rahul", 20000);

        System.out.println("=== Savings Account ===");
        sa.deposit(5000);
        sa.displayDetails();
        sa.calculateInterest();

        System.out.println("\n=== Current Account ===");
        ca.deposit(3000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}

