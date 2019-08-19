class DragMath {
    static ReduceV3Velocity(velocity, dragCoefficient) {
        velocity.x *= dragCoefficient;
        velocity.y *= dragCoefficient;
        velocity.z *= dragCoefficient;
        velocity.x = Math.round(base.linearVelocity.x * 100) / 100;
        velocity.y = Math.round(base.linearVelocity.y * 100) / 100;
        velocity.z = Math.round(base.linearVelocity.z * 100) / 100;
    }
    static ApplyDragToBody(body, dragCoefficient){
        body.linearVelocity = this.ReduceV3Velocity(body.linearVelocity, dragCoefficient);
        body.angularVelocity = this.ReduceV3Velocity(body.angularVelocity, dragCoefficient);
    }
}

export default DragMath;