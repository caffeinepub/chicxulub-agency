import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Lead = {
    name : Text;
    email : Text;
    phone : Text;
    businessType : Text;
    service : Text;
    message : Text;
  };

  module Lead {
    public func compare(a : Lead, b : Lead) : Order.Order {
      Text.compare(a.email, b.email);
    };
  };

  let leads = Map.empty<Text, Lead>();

  public shared ({ caller }) func submitLead(name : Text, email : Text, phone : Text, businessType : Text, service : Text, message : Text) : async () {
    let lead : Lead = {
      name;
      email;
      phone;
      businessType;
      service;
      message;
    };
    leads.add(email, lead);
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    leads.values().toArray().sort();
  };

  public query ({ caller }) func getLeadByEmail(email : Text) : async Lead {
    switch (leads.get(email)) {
      case (null) { Runtime.trap("Lead not found") };
      case (?lead) { lead };
    };
  };
};
