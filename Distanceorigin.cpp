#include<iostream>
#include<cmath>
using namespace std;

class Point{
    private:
    double x,y;
    public:
    Point(double xx = 0.0, double yy = 0.0) : x(xx), y(yy) {}
    double getX(){return x;}
    double getY(){return y;}
    double distance();
    double distance(Point p);
    void display();
};
void Point::display() {
    cout << "(" << x << "," << y << ")";
} 

double Point::distance(){
    return sqrt(x*x + y*y);

}
double Point::distance(Point p){
    return sqrt((p.x - x) * (p.x - x) + (p.y - y) * (p.y - y));
}
int main(){
    Point Origin;
    cout<<"\n The CO-ORDINATES OF ORIGIN :";
    Origin.display();
    cout<<endl;

    Point p1(3,7);
    cout<<"\nThe Distance of ";
    p1.display();
    cout<<"is"<<p1.distance();

    Point p2(7,7);
    cout<<"\nThe distance of";
    p1.display();
    cout<<"from";
    p2.display();
    cout << " is " << p1.distance(p2)<<endl;
    return 0;

}

