(function() {
    /**
    * @function ModalCtrl
    * @desc
    * @returns
    */
    function RoomCtrl(Room, Message, $uibModalInstance) {

        /**
        * @function addRoom
        * @desc adds a new room to room list
        * @returns
        */
        this.addRoom = function() {
            Room.addRoom(this.newRoomName);
            this.newRoomName = "";
            console.log("add room is being hit", this);
        };

        this.deleteRoom = function() {
            Room.deleteRoom(this.currentRoom);
            this.currentRoom= "";
            console.log("delete is firing", this);
        };


        this.submitMessage = function () {
          Message.send({
                roomID: this.currentRoom.$id,
                content: this.newMessage,
                username: currentUser
            });
            this.newMessage = "";
        };





        /**
        * @function closeModal
        * @desc closes the modal when user hit cancel
        * @returns
        */
        this.closeModal = function () {
            console.log("cancel is being hit");
            var modelInstance = $uibModalInstance.close('close');
        };
    }


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message','$uibModalInstance', RoomCtrl]);
})();
