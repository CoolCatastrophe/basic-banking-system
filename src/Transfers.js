import { useEffect, useState } from "react";
import supabase from "./supabase";

function Transfers({ userData, setUserData }) {
  const [selectedUser, setSelectedUser] = useState("");
  const [recipientUser, setRecipientUser] = useState("");
  const [selectedUserEmail, setSelectedUserEmail] = useState("");
  const [transferValue, setTransferValue] = useState(0);

  const resetForm = () => {
    setSelectedUser("");
    setRecipientUser("");
    setSelectedUserEmail("");
    setTransferValue(0);
  };
  const userChange = (event) => {
    setSelectedUser(event.target.value);
  };
  const recipientChange = (event) => {
    setRecipientUser(event.target.value);
  };

  const valueChange = (event) => {
    setTransferValue(Number(event.target.value));
  };

  function transferAmount(event) {
    event.preventDefault();
    const senderIndex = userData.findIndex(
      (user) => user.name === selectedUser
    );
    const recipientIndex = userData.findIndex(
      (user) => user.name === recipientUser
    );

    if (
      senderIndex !== -1 &&
      recipientIndex !== -1 &&
      transferValue > 0 &&
      recipientUser !== "Choose Recipient Account" &&
      userData[senderIndex].currentBalance >= transferValue
    ) {
      alert("Transfering Amount Now...");

      const updatedUserData = [...userData];

      const amountToTransfer = Number(transferValue);

      updatedUserData[senderIndex] = {
        ...updatedUserData[senderIndex],
        currentBalance:
          updatedUserData[senderIndex].currentBalance - amountToTransfer,
      };
      updatedUserData[recipientIndex] = {
        ...updatedUserData[recipientIndex],
        currentBalance:
          updatedUserData[recipientIndex].currentBalance + amountToTransfer,
      };

      setUserData(updatedUserData);

      async function updateSender() {
        const senderId = updatedUserData[senderIndex].id;
        const senderUpdatedBalance =
          updatedUserData[senderIndex].currentBalance;

        const { error } = await supabase
          .from("customers")
          .update({ currentBalance: senderUpdatedBalance })
          .eq("id", senderId);
        if (error) {
          console.error("Error updating sender balance:", error.message);
        }
      }

      async function updateReceiver() {
        const receiverId = updatedUserData[recipientIndex].id;
        const receiverUpdatedBalance =
          updatedUserData[recipientIndex].currentBalance;

        const { error } = await supabase
          .from("customers")
          .update({ currentBalance: receiverUpdatedBalance })
          .eq("id", receiverId);
        if (error) {
          console.log("Error updating recipient balance", error.message);
        }
      }
      updateSender();
      updateReceiver();
      resetForm();
      alert(
        `🎉Transfer Successful🎉\n\nSender: ${selectedUser}\nRecipient: ${recipientUser}\nTransfer Amount: ${amountToTransfer}`
      );
      alert("View Updated Balances of Users in our Users Section ");
    } else {
      alert("Invalid Transfer Amount or User Account/Recepient Account");
    }
  }

  useEffect(() => {
    const selectedUserEmail =
      userData.find((user) => user.name === selectedUser)?.email ||
      "Please Select your User A/C above";
    setSelectedUserEmail(selectedUserEmail);
  }, [selectedUser, userData]);

  return (
    <aside className="transfers-section" id="transfers">
      <div className="transfers-text">
        <h2 className="transfers-heading">Tranfers Section</h2>
        <p className="transfers-description">
          Transfer money <strong>effortlessly and securely</strong> with
          MoneyWise, Our intuitive transfer system allows you to{" "}
          <strong>send and receive</strong> funds with{" "}
          <strong>just a few clicks.</strong>
        </p>
      </div>
      <form className="transfers-form">
        <div className="transfers-info">
          <label htmlFor="selectedUser">User Name :</label>
          <select value={selectedUser} onChange={userChange}>
            <option>Choose Your Account</option>
            {userData.map((user) => (
              <option key={user.id}>{user.name}</option>
            ))}
          </select>

          <label htmlFor="selectedUserEmail">Your Email Address is :</label>
          <input
            id="selectedUserEmail"
            type="text"
            value={selectedUserEmail}
            readOnly
          />

          <label htmlFor="recipientUser">Recipient User Name :</label>
          <select
            id="recipientUser"
            value={recipientUser}
            onChange={recipientChange}
          >
            <option>Choose Recipient Account</option>
            {userData.map(
              (user) =>
                user.name !== selectedUser && (
                  <option key={user.id}>{user.name}</option>
                )
            )}
          </select>

          <label htmlFor="transferAmount">
            Please Select Your Transfer Amount :
          </label>
          <input
            id="transferAmount"
            type="number"
            onChange={valueChange}
            value={transferValue}
          />

          <input
            type="submit"
            className="transfer-button"
            value="Transfer Now"
            onClick={(event) => transferAmount(event)}
          />
        </div>

        <div>
          <img
            className="transfers-image"
            alt="pay-online"
            src="./images/pay-online.svg"
          />
        </div>
      </form>
    </aside>
  );
}

export default Transfers;
